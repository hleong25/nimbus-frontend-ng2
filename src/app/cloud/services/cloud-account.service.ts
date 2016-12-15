import { Injectable } from '@angular/core';

import { CloudAccount } from '../models/cloud-account';
import { CloudType } from '../models/cloud-type';

import { MOCK_LOCAL_ACCOUNT } from './mocks/mock.local';
import { MOCK_GDRIVE_ACCOUNT } from './mocks/mock.gdrive';

export interface AuthFunc {
  (): string;
}

@Injectable()
export class CloudAccountService {

  public constructor() { }

  public create(
    type: CloudType,
    email: string,
    authFn: AuthFunc
  ): CloudAccount {
    let account: CloudAccount;

    switch (type) {
      case CloudType.Local:
        account = MOCK_LOCAL_ACCOUNT;
        break;
      case CloudType.GoogleDrive:
        account = MOCK_GDRIVE_ACCOUNT;
        break;
      case CloudType.Dropbox:
        break;
      case CloudType.BoxDotCom:
        break;
    }

    return account;
  }

}
