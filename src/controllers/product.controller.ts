import { Request, Response } from 'express';
import services from '../services';

class ProductController {
  constructor(private productService = new services.ProductService()) { }

  public newProduct = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const product = await this.productService.createNewProduct({ name, amount });
    return res.status(201).json(product);
  };
}

export default ProductController;