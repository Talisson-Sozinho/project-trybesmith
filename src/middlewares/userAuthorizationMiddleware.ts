import { NextFunction, Request, Response } from 'express';

import { errorObjectConstructor, UNAUTHORIZED } from '../helpers/errorHelper';
import { tokenValidator } from '../helpers/jwtHelper';

export default (req: Request, _res: Response, next: NextFunction):void => {
  const token = req.header('Authorization');

  if (!token) throw errorObjectConstructor(UNAUTHORIZED, 'Token not found');

  try {
    const { user } = tokenValidator(token);
    req.body.user = user;
    return next();
  } catch (error) {
    return next(errorObjectConstructor(UNAUTHORIZED, 'Invalid token'));
  }
};
