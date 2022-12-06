import { Router } from 'express';
import controllers from '../controllers';
import productsValidate from '../middlewares/productsValidate';

const router = Router();

const productController = new controllers.ProductController();

router.post('/', productsValidate, productController.newProduct);

router.get('/', productController.allProducts);

export default router;