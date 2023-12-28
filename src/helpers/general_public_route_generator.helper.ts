import { Router } from 'express';
import { processRequestQuery } from 'zod-express-middleware';
import { GeneralController } from '../controllers';
import { IValidation } from '../interfaces';

function generalRouteGenerator(validation: IValidation, generalController: GeneralController<any>) {
  const router = Router();

  router.get('/search', processRequestQuery(validation.find.query), generalController.find);

  router.get('/count', processRequestQuery(validation.find.query), generalController.getCount);

  router.get('/exists', processRequestQuery(validation.find.query), generalController.exists);

  router.get('/', processRequestQuery(validation.find.query), generalController.getAll);

  router.get('/:pagination', processRequestQuery(validation.find.query), generalController.getAll);

  return router;
}

export default generalRouteGenerator;
