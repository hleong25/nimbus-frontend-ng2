import { Injectable } from '@angular/core';


import { User } from '../models/user';
import { CloudAccount } from '../models/cloud-account';
import { NimbusAccount } from '../models/nimbus-account';

import { MOCK_NIMBUS_ACCOUNT } from './mocks/mock.nimbus-account';

@Injectable()
export class NimbusAccountService {

  public constructor() { }

  public create(
    user?: User
  ): NimbusAccount {
    let account: NimbusAccount;

    account = MOCK_NIMBUS_ACCOUNT;

    return account;
  }

}

