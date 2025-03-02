import CreateUserService from '@modules/users/services/CreateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const CreateUser = container.resolve(CreateUserService);

    const user = await CreateUser.execute({
      name,
      email,
      password,
    });

    return response.json(classToClass(user));
  }
}
