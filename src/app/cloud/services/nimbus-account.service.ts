import { Injectable } from '@angular/core';

import { UserService } from '../../user/index';

import { User } from '../models/user';
import { CloudAccount } from '../models/cloud-account';
import { NimbusAccount } from '../models/nimbus-account';

import { MOCK_NIMBUS_ACCOUNT } from './mocks/mock.nimbus-account';

@Injectable()
export class NimbusAccountService {

  private nimbusAccount: NimbusAccount;

  public constructor(
    //private userService: UserService,
  ) { }

  public load() {
    this.nimbusAccount = MOCK_NIMBUS_ACCOUNT;

    console.log("load()", this.nimbusAccount)
  }

  public filter() {
    this.nimbusAccount.cloudAccounts.forEach(function(val: CloudAccount, idx: number){
      console.log(val.files)
    })
  }

}

