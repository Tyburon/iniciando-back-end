import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

//  index, show, create, update, delete

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);
    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    return response.json({ user: classToClass(user), token });
  }
}
