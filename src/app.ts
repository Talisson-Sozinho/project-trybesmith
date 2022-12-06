import express from 'express';
import routes from './routes';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/products', routes.productRoute);

app.use('/users', routes.userRoute);

app.use('/orders', routes.orderRoute);

app.use(errorMiddleware);

export default app;
