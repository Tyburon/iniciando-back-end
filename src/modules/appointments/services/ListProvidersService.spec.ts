// import AppError from '@shared/error/AppError';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import AppError from '@shared/error/AppError';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'John Ducket',
      email: 'johnducket@example.com',
      password: '123456',
    });

    const user3 = await fakeUsersRepository.create({
      name: 'Steve Jobs',
      email: 'stevejobs@example.com',
      password: '123456',
    });

    const user4 = await fakeUsersRepository.create({
      name: 'Mark Zuckerberg',
      email: 'markzuckerberg@example.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Diego Schell',
      email: 'diegoschell@example.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2, user3, user4]);
  });
});
