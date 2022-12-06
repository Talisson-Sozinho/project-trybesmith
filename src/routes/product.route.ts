import { Router } from 'express';
import controllers from '../controllers';

const router = Router();

const productController = new controllers.ProductController();

router.post('/', productController.newProduct);

router.get('/', productController.allProducts);

export default router;