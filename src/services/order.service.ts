import connection from '../models/connection';
import models from '../models';
import Order from '../interfaces/order.interface';

class OrderService {
  constructor(private model = new models.OrderModel(connection)) { }

  public async getAllOrder(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}

export default OrderService;