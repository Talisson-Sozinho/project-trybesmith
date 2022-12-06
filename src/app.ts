import express from 'express';
import 'express-async-errors';
import routes from './routes';
import errorMiddleware from './middlewares/error.middleware';
import userAuthValidate from './middlewares/userAuthValidate';

const app = express();

app.use(express.json());

app.use('/products', routes.productRoute);

app.use('/users', routes.userRoute);

app.use('/orders', routes.orderRoute);

app.use('/login', userAuthValidate, routes.loginRoute);

app.use(errorMiddleware);

export default app;
