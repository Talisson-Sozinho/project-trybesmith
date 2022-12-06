import { NextFunction, Request, Response } from 'express';

import { errorCode } from '../helpers/errorHelper';

export default (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = error;

  return res.status(errorCode(name)).json({ message: message || 'internal error' });
};
