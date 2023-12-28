import { Router } from 'express';
import { processRequestBody, processRequestParams } from 'zod-express-middleware';
import { GeneralController } from '../controllers';
import { IValidation } from '../interfaces';
import { objectIdValidation } from '../validation';

function generalRouteGenerator(validation: IValidation, generalController: GeneralController<any>) {
  const router = Router();

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
