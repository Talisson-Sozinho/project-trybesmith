import { NextFunction, Request, Response } from 'express';

import { BAD_REQUEST, errorObjectConstructor, UNPROCESSABLE_ENTITY } from '../helpers/errorHelper';

export default (req: Request, _res: Response, next: NextFunction):void => {
  const { productsIds } = req.body;

  if (!productsIds) throw errorObjectConstructor(BAD_REQUEST, '"productsIds" is required');

  if (!Array.isArray(productsIds)) {
    throw errorObjectConstructor(UNPROCESSABLE_ENTITY, '"productsIds" must be an array');
  }

  if (productsIds.length === 0) {
    throw errorObjectConstructor(UNPROCESSABLE_ENTITY, '"productsIds" must include only numbers');
  }

  return next();
};
