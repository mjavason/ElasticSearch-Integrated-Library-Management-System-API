import { Model, Document } from 'mongoose';

export class GeneralService<T extends Document> {
  private DBModel: Model<T>;

  constructor(model: Model<any>) {
    this.DBModel = model;
  }

  create = async (body: T): Promise<any> => {
    return await this.DBModel.create(body);
  };

  getAll = async (pagination: number, searchDetails: object = {}): Promise<any[]> => {
    return await this.DBModel.find(searchDetails)
      .explain()
      .limit(10)
      .skip(pagination)
      .sort({ createdAt: 'desc' })
      .select('-__v');
  };

  update = async (searchDetails: object, update: object): Promise<any> => {
    return await this.DBModel.findOneAndUpdate({ ...searchDetails }, update, {
      new: true,
    }).select('-__v');
  };

  getCount = async (searchData: object) => {
    return await this.DBModel.countDocuments({ ...searchData }).explain();
  };

  find = async (searchData: object): Promise<any[]> => {
    return await this.DBModel.find({ ...searchData }).select('-__v');
  };

  findOne = async (searchData: object): Promise<any> => {
    return this.DBModel.findOne({ ...searchData }).select('-__v');
  };

  softDelete = async (searchParams: object): Promise<any> => {
    return await this.DBModel.findOneAndUpdate(
      { ...searchParams, deleted: false },
      { deleted: true },
      {
        new: true,
      },
    ).select('-__v');
  };

  hardDelete = async (searchParams: object): Promise<any> => {
    return await this.DBModel.findOneAndDelete(searchParams).select('-__v').explain();
  };

  exists = async (searchParams: object) => {
    return await this.DBModel.exists({ ...searchParams }).explain();
  };
}
