import { Router } from 'express';
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import { GeneralController } from '../controllers';
import { IValidation } from '../interfaces';
import { objectIdValidation } from '../validation';
import elasticSearchDuplicate from '../middleware/elasticsearch_test.middleware';

function generalRouteGenerator(validation: IValidation, generalController: GeneralController<any>) {
  const router = Router();

  router.get(
    '/search',
    // elasticSearchDuplicate,
    processRequestQuery(validation.find.query),
    generalController.elasticFind,
  );

  router.get('/count', processRequestQuery(validation.find.query), generalController.getCount);

  router.get('/exists', processRequestQuery(validation.find.query), generalController.exists);

  router.get('/', processRequestQuery(validation.find.query), generalController.getAll);

  router.get('/:pagination', processRequestQuery(validation.find.query), generalController.getAll);

  router.post('/', processRequestBody(validation.create.body), generalController.create);

  router.patch(
    '/:id',
    [
      processRequestParams(objectIdValidation.find.params),
      processRequestBody(validation.update.body),
    ],
    generalController.update,
  );

  router.delete(
    '/:id',
    processRequestParams(objectIdValidation.find.params),
    generalController.delete,
  );

  return router;
}

export default generalRouteGenerator;
