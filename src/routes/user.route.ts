import { Router } from 'express';
import controllers from '../controllers';
import UserRegistrationValidate from '../middlewares/ userRegistrationValidate';

const router = Router();

const productController = new controllers.UserController();

router.post('/', UserRegistrationValidate, productController.newUser);

export default router;