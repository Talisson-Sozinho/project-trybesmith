import { Router } from 'express';
import controllers from '../controllers';

const router = Router();

const userController = new controllers.UserController();

router.post('/', userController.auth);

export default router;