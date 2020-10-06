/* eslint-disable camelcase */
import User from '@modules/users/infra/typeorm/entities/User';
import { isEqual } from 'date-fns';
import { uuid } from 'uuidv4';

// DTO -Data Transfer Object
import IUserTokensRepository from '../IUserTokenRepository';

import UserToken from '../../infra/typeorm/entities/UserToken';

class FakeUserTokensRepository implements IUserTokensRepository {
  private userTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id,
    });

    this.userTokens.push(userToken);

    return userToken;
  }
}

export default FakeUserTokensRepository;
