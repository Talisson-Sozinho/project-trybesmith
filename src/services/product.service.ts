import connection from '../models/connection';
import models from '../models';
import Product from '../interfaces/product.interface';

class ProductService {
  constructor(private model = new models.ProductModel(connection)) { }

  public async createNewProduct(product: Product) : Promise<Product> {
    const books = await this.model.create(product);
    return books;
  }
}

export default ProductService;