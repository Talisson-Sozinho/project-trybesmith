import { NextFunction, Request, Response } from 'express';

import { BAD_REQUEST, errorObjectConstructor, UNPROCESSABLE_ENTITY } from '../helpers/errorHelper';

const validateName = (name: string): void => {
  if (!name) throw errorObjectConstructor(BAD_REQUEST, '"name" is required');
  
  if (typeof name !== 'string') {
    throw errorObjectConstructor(UNPROCESSABLE_ENTITY, '"name" must be a string'); 
  }

  if (name.length < 3) { 
    throw errorObjectConstructor(
      UNPROCESSABLE_ENTITY, 
      '"name" length must be at least 3 characters long',
    ); 
  }
};

const validateAmount = (amount: string): void => {
  if (!amount) throw errorObjectConstructor(BAD_REQUEST, '"amount" is required');

  if (typeof amount !== 'string') {
    throw errorObjectConstructor(UNPROCESSABLE_ENTITY, '"amount" must be a string'); 
  }

  if (amount.length < 3) { 
    throw errorObjectConstructor(
      UNPROCESSABLE_ENTITY, 
      '"amount" length must be at least 3 characters long',
    ); 
  }
};

export default (req: Request, _res: Response, next: NextFunction):void => {
  const { name, amount } = req.body;

  validateName(name);

  validateAmount(amount);

  return next();
};
