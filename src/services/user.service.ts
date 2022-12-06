import connection from '../models/connection';
import models from '../models';
import User from '../interfaces/user.interface';
import { tokenGenerator } from '../helpers/jwtHelper';

class UserService {
  constructor(private model = new models.UserModel(connection)) { }

  public async createNewUser(newUser: User) : Promise<string> {
    const userId = await this.model.create(newUser);

    const token = tokenGenerator(userId);

    return token;
  }
}

export default UserService;