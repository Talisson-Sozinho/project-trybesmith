import { Router } from 'express';
import controllers from '../controllers';

const router = Router();

const productController = new controllers.UserController();

router.post('/', productController.newUser);

export default router;