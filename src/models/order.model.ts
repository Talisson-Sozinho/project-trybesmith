import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [rows] = await this.connection.execute(`
      SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.Products as p 
      RIGHT JOIN Trybesmith.Orders as o 
      ON p.orderId = o.id
      group by o.id;
    `);

    return rows as Order[];
  }
}