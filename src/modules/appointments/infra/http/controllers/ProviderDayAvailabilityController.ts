/* eslint-disable camelcase */
import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ProviderMonthAvailabilityyController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;

    const listProviderDayAvailability = container.resolve(
      ListProviderDayAvailabilityService,
    );
    // const appointmentsRepository = new AppointmentsRepository();
    // const createAppointment = new CreateAppointmentService(
    //   appointmentsRepository,
    // );

    const availability = await listProviderDayAvailability.execute({
      provider_id,
      month,
      year,
      day,
    });

    return response.json(availability);
  }
}
