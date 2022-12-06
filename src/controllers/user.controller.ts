import { Request, Response } from 'express';
import services from '../services';

class UserController {
  constructor(private userService = new services.UserService()) { }

  public newUser = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    const token = await this.userService.createNewUser(
      { username, classe, level, password },
    );
    return res.status(201).json({ token });
  };
}

export default UserController;