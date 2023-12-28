import { Request, Response } from 'express';
import { GeneralService } from '../services';
import { Document, Model } from 'mongoose';
import {
  SuccessResponse,
  InternalErrorResponse,
  NotFoundResponse,
} from '../helpers/response.helper';
import { DATABASES, MESSAGES } from '../constants';
import { client } from '../config/elasticsearch';
import { createJSONFile } from '../helpers/file.helper';

export class GeneralController<T extends Document> {
  private generalService: GeneralService<T>;

  constructor(model: Model<any>) {
    this.generalService = new GeneralService<T>(model);
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
    this.exists = this.exists.bind(this);
    this.find = this.find.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getCount = this.getCount.bind(this);
    this.hardDelete = this.hardDelete.bind(this);
    this.update = this.update.bind(this);
    this.elasticFind = this.elasticFind.bind(this);
  }

  async create(req: Request, res: Response) {
    const data = await this.generalService.create(req.body);

    if (!data) return InternalErrorResponse(res);

    // Deep copy the object to create an independent copy
    let dataDoc = JSON.parse(JSON.stringify(data._doc));

    // Now, deleting a field from dataDoc won't affect the original data._doc
    delete dataDoc._id;

    await client.index({
      index: DATABASES.BOOK,
      id: data._id,
      body: dataDoc,
    });

    await client.indices.refresh({ index: DATABASES.BOOK });

    return SuccessResponse(res, data);
  }

  async getAll(req: Request, res: Response) {
    let pagination = parseInt(req.params.pagination);

    if (!pagination) pagination = 1;

    pagination = (pagination - 1) * 10;

    const data = await this.generalService.getAll(pagination, req.query);

    if (!data) return InternalErrorResponse(res);
    if (data.length === 0) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async exists(req: Request, res: Response) {
    const data = await this.generalService.exists(req.query);

    if (!data) return SuccessResponse(res, []);

    return SuccessResponse(res, data);
  }

  async getCount(req: Request, res: Response) {
    const data = await this.generalService.getCount(req.query);

    if (!data) return SuccessResponse(res, { data: 0 });

    return SuccessResponse(res, data);
  }

  async find(req: Request, res: Response) {
    const data = await this.generalService.find(req.query);

    if (!data) return InternalErrorResponse(res);
    if (data.length === 0) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async elasticFind(req: Request, res: Response) {
    const searchParams: any = req.query;

    const data: any = await client.search({
      index: DATABASES.BOOK,
      body: {
        query: {
          match: searchParams,
        },
      },
    });

    if (!data.hits) return NotFoundResponse(res);

    // createJSONFile('../', 'elasticSearchResults', data);

    return SuccessResponse(res, data.hits);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = await this.generalService.update({ _id: id }, req.body);

    if (!data) return NotFoundResponse(res);

    // Deep copy the object to create an independent copy
    let dataDoc = JSON.parse(JSON.stringify(data._doc));

    // Now, deleting a field from dataDoc won't affect the original data._doc
    delete dataDoc._id;

    await client.update({
      index: DATABASES.BOOK,
      id: id,
      body: {
        script: {
          source: 'ctx._source = params', // Provide the update operation here
          params: dataDoc, // Use the request body as the update parameters
        },
      },
    });

    await client.indices.refresh({ index: DATABASES.BOOK });

    return SuccessResponse(res, data, MESSAGES.UPDATED);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await this.generalService.softDelete({ _id: id });

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, MESSAGES.DELETED);
  }

  // Admins only
  async hardDelete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await this.generalService.hardDelete({ _id: id });

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, MESSAGES.DELETED);
  }
}
