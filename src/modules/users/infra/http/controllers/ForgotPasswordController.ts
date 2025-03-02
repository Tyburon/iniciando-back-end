import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';
// import { json } from 'body-parser';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

//  index, show, create, update, delete

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordEmail = container.resolve(
      SendForgotPasswordEmailService,
    );
    await sendForgotPasswordEmail.execute({
      email,
    });

    return response.status(204).json();
  }
}
