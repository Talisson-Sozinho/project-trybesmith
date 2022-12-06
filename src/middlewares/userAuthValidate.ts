import { NextFunction, Request, Response } from 'express';

import { BAD_REQUEST, errorObjectConstructor } from '../helpers/errorHelper';

export default (req: Request, _res: Response, next: NextFunction):void => {
  const { username, password } = req.body;

  if (!username) throw errorObjectConstructor(BAD_REQUEST, '"username" is required');

  if (!password) throw errorObjectConstructor(BAD_REQUEST, '"password" is required');

  return next();
};
