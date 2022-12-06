import connection from '../models/connection';
import models from '../models';
import Order from '../interfaces/order.interface';

class OrderService {
  constructor(
    private model = new models.OrderModel(connection),
    private productModel = new models.ProductModel(connection),
  ) { }

  public async getAllOrder(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }
  
  public async createNewOrder(userId: number, productsIds: number[]): Promise<Order> {
    const orderId = await this.model.create(userId);
    const productsIdsUpdated = productsIds.map( 
      (productId) => this.productModel.sellerProduct(productId, orderId),
    );
    await Promise.all(productsIdsUpdated);
    return { userId, productsIds };
  }
}

export default OrderService;