import { Router } from 'express';
import controllers from '../controllers';
import newOrderValidate from '../middlewares/newOrderValidate';
import userAuthorizationMiddleware from '../middlewares/userAuthorizationMiddleware';

const router = Router();

const orderController = new controllers.OrderController();

router.get('/', orderController.allOrders);

router.post('/', userAuthorizationMiddleware, newOrderValidate, orderController.newOrder);

export default router;