import connection from '../models/connection';
import models from '../models';
import Product from '../interfaces/product.interface';

class ProductService {
  constructor(private model = new models.ProductModel(connection)) { }

  public async createNewProduct(newProduct: Product) : Promise<Product> {
    const productCreated = await this.model.create(newProduct);
    return productCreated;
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductService;