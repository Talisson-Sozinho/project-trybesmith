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

  public auth = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const token = await this.userService.authenticateUser(username, password);

    return res.status(200).json({ token });
  };
}

export default UserController;