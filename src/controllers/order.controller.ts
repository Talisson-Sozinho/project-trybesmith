import { Request, Response } from 'express';
import services from '../services';

class OrderController {
  constructor(private orderService = new services.OrderService()) { }

  public allOrders = async (_req: Request, res: Response) => {
    const result = await this.orderService.getAllOrder();
    return res.status(200).json(result);
  };

  public newOrder = async (req: Request, res: Response) => {
    const { user: { userId }, productsIds } = req.body;
    const result = await this.orderService.createNewOrder(userId, productsIds);
    return res.status(201).json(result);
  };
}

export default OrderController;