import jwt, { Secret, SignOptions } from 'jsonwebtoken';

const secret: Secret = <string>process.env.JWT_SECRET;

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const tokenGenerator = (userId: number) => jwt.sign({ data: { userId } }, secret, jwtConfig);

export const tokenValidator = (token: string) => jwt.verify(token, secret);

export default {
  tokenGenerator,
  tokenValidator,
};