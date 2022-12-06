import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(newProduct: Product): Promise<Product> {
    const { name, amount } = newProduct;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...newProduct };
  }

  public async getAll(): Promise<Product[]> {
    const [rows] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return rows as Product[];
  }

  public async sellerProduct(id: number, orderId: number) {
    const [rows] = await this.connection.execute(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id=?',
      [orderId, id],
    );
    return rows;
  }
}