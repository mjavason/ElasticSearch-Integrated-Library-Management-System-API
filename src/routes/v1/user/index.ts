import express from 'express';
const router = express.Router();

// Route Controllers
import generalRouteGenerator from '../../../helpers/general_route_generator.helper';

// Models
import { BookModel } from '../../../models';

// Interfaces
import { IBook } from '../../../interfaces';

// Controllers
import { GeneralController } from '../../../controllers';
const bookController = new GeneralController<IBook>(BookModel);

// Validation
import { bookValidation } from '../../../validation';

import isAuth from '../../../middleware/is_auth.middleware';

router.use(isAuth);
router.use('/book', generalRouteGenerator(bookValidation, bookController));

export default router;
