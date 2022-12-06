import { NextFunction, Request, Response } from 'express';

import { BAD_REQUEST, errorObjectConstructor, UNPROCESSABLE_ENTITY } from '../helpers/errorHelper';

type StringOptions = 'classe' | 'username' | 'password';

const validateStringField = (string: string, options: StringOptions): void => {
  if (!string) throw errorObjectConstructor(BAD_REQUEST, `"${options}" is required`);
  
  if (typeof string !== 'string') {
    throw errorObjectConstructor(UNPROCESSABLE_ENTITY, `"${options}" must be a string`); 
  }
};

const validateLengthField = (string: string, length: number, options: StringOptions): void => {
  if (string.length < length) {
    throw errorObjectConstructor(
      UNPROCESSABLE_ENTITY, 
      `"${options}" length must be at least ${length} characters long`,
    );
  }
};

const validateLevelField = (number: number): void => {
  if (!number && number !== 0) throw errorObjectConstructor(BAD_REQUEST, '"level" is required');

  if (typeof number !== 'number') {
    throw errorObjectConstructor(UNPROCESSABLE_ENTITY, '"level" must be a number');
  }

  if (number < 1) {
    throw errorObjectConstructor(
      UNPROCESSABLE_ENTITY, 
      '"level" must be greater than or equal to 1',
    );
  }
};

export default (req: Request, _res: Response, next: NextFunction):void => {
  const { username, classe, level, password } = req.body;

  validateStringField(username, 'username');
  validateStringField(classe, 'classe');
  validateStringField(password, 'password');

  validateLengthField(username, 3, 'username');
  validateLengthField(classe, 3, 'classe');
  validateLengthField(password, 8, 'password');

  validateLevelField(level);

  return next();
};