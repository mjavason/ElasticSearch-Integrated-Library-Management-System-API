import express, { Request, Response } from 'express';
import { STATUS_CODES, MESSAGES } from './constants';
import rootRoutes from './routes';
import preMiddleware from './middleware/pre.middleware';
import { SuccessMsgResponse } from './helpers/response.helper';

const app = express();

preMiddleware(app);

//default response
app.get('/', (req: Request, res: Response) => SuccessMsgResponse(res, MESSAGES.DEFAULT));

// importe all routes
app.use('/api', rootRoutes);

// Handle 404 errors
app.use((req: Request, res: Response) => {
  res
    .status(404)
    .send({ status_code: STATUS_CODES.FAILURE, message: MESSAGES.ROUTE_NOT_FOUND, success: false });
});

export default app;
