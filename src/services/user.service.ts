import connection from '../models/connection';
import models from '../models';
import User from '../interfaces/user.interface';
import { tokenGenerator } from '../helpers/jwtHelper';
import { errorObjectConstructor, UNAUTHORIZED } from '../helpers/errorHelper';

class UserService {
  constructor(private model = new models.UserModel(connection)) { }

  public async createNewUser(newUser: User) : Promise<string> {
    const userId = await this.model.create(newUser);

    const token = tokenGenerator(userId, newUser.username);

    return token;
  }

  public async authenticateUser(userName: string, password: string) : Promise<string> {
    const userId = await this.model.userAuth(userName, password);

    if (!userId) throw errorObjectConstructor(UNAUTHORIZED, 'Username or password invalid');

    return tokenGenerator(userId, userName);
  }
}

export default UserService;