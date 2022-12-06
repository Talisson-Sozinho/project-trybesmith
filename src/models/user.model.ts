import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(newUser: User): Promise<number> {
    const { username, classe, level, password } = newUser;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users ( username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return insertId;
  }

  public async userAuth(userName: string, password: string): Promise<number | undefined> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?', 
      [userName, password],
    );
    const [rows] = result;
    const [user] = rows as User[];
    if (!user) return;
    return user.id;
  }
}