import { Router } from 'express';
import controllers from '../controllers';

const router = Router();

const orderController = new controllers.OrderController();

router.get('/', orderController.allOrders);

export default router;