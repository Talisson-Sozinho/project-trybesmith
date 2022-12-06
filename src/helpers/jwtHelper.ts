import jwt, { Secret, SignOptions } from 'jsonwebtoken';

const secret: Secret = <string>process.env.JWT_SECRET;

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const tokenGenerator = (userId: number, username: string) => (
  jwt.sign({ user: { userId, username } }, secret, jwtConfig)
);

interface TokenInterface {
  user: {
    userId: number;
    username: string;
  };
}

export const tokenValidator = (token: string): TokenInterface => (
  jwt.verify(token, secret) as TokenInterface
);

export default {
  tokenGenerator,
  tokenValidator,
};