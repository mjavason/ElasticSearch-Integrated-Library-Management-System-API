import { NextFunction, Request, Response } from 'express';
import { AuthFailureResponse } from '../helpers/response.helper';

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;

  const loggedUser = user;
  if (loggedUser && loggedUser.role !== 'admin') {
    console.log('Invalid login details, not admin');
    return AuthFailureResponse(res);
  }
  return next();
};

export default isAdmin;
