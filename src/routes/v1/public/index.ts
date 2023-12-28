import express from 'express';
const router = express.Router();
import authRoute from './auth.route';

router.use('/auth', authRoute);

export default router;
