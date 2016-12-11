import { Injectable } from '@angular/core';

import { Account } from '../models/account';
import { CloudType } from '../models/cloud-type';

import { MOCK_LOCAL_ACCOUNT } from './mocks/mock.local';

export interface AuthFunc {
  (): string;
}

@Injectable()
export class AccountService {

  public constructor() { }

  public create(
    type: CloudType,
    email: string,
    authFn: AuthFunc
  ): Account {
    let account: Account;

    if (type === CloudType.Local) {
      account = MOCK_LOCAL_ACCOUNT;
    }

    return account;
  }

}
