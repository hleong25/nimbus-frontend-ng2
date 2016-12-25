import { Injectable } from '@angular/core';

import {
  Observable,
  Subject,
} from 'rxjs/Rx';

import { UserService } from '../../user/index';

import { CloudFile } from '../models/cloud-file';
import { User } from '../models/user';
import { CloudAccount } from '../models/cloud-account';
import { NimbusAccount } from '../models/nimbus-account';

import { MOCK_NIMBUS_ACCOUNT } from './mocks/mock.nimbus-account';

@Injectable()
export class NimbusAccountService {

  private nimbusAccount: NimbusAccount;
  private allFiles: Subject<CloudFile>;

  public constructor(
    //private userService: UserService,
  ) { }

  public load() {
    this.nimbusAccount = MOCK_NIMBUS_ACCOUNT;

    this.allFiles = new Subject<CloudFile>();
  }

  public getAll() : Observable<CloudFile> {
    return this.allFiles.asObservable();
  }

  public fetch() {
    this.nimbusAccount.cloudAccounts.forEach(function(acct: CloudAccount, idx: number){
      acct.files.forEach(function (cloudfile: CloudFile){
        this.next(cloudfile);
      }, this);
    }, this.allFiles)
  }

}

