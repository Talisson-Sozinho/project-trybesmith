const BAD_REQUEST = 'BAD_REQUEST';
const CONFLICT = 'CONFLICT';
const UNAUTHORIZED = 'UNAUTHORIZED';
const NOT_FOUND = 'NOT_FOUND';

const errorObjectConstructor = (type: string, message: string): Error => {
  const error = new Error(message);
  error.name = type;
  return error;
};

const errorCode = (type: string): number => {
  switch (type) {
    case BAD_REQUEST:
      return 400;
    case UNAUTHORIZED:
      return 401;
    case NOT_FOUND:
      return 404;
    case CONFLICT:
      return 409;
    default:
      return 500;
  }
};

export {
  BAD_REQUEST,
  CONFLICT,
  UNAUTHORIZED,
  NOT_FOUND,
  errorObjectConstructor,
  errorCode,
};