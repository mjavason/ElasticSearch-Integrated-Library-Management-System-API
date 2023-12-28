import { Router } from 'express';
const router = Router();
import { processRequestBody, processRequestParams } from 'zod-express-middleware';
import { userController } from '../../../controllers';
import { authValidation } from '../../../validation';

router.get('/magic/:token', userController.authorizeUserFromMagicLink);

router.post(
  '/reset-password-email/:email',
  processRequestParams(authValidation.resetPasswordEmail.params),
  userController.resetPasswordMail,
);

router.post(
  '/reset-password/:token',
  processRequestBody(authValidation.resetPasswordToken.body),
  userController.resetPassword,
);

router.post('/register', processRequestBody(authValidation.register.body), userController.register);

router.post('/login', processRequestBody(authValidation.login.body), userController.login);

router.delete('/logout', userController.logout);

export default router;
