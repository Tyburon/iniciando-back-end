import ResetPasswordService from '@modules/users/services/ResetPasswordService';
// import { json } from 'body-parser';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

//  index, show, create, update, delete

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPassword = container.resolve(ResetPasswordService);
    await resetPassword.execute({
      password,
      token,
    });

    return response.status(204).json();
  }
}
