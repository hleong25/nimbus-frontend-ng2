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

import { ContentType } from '../../dashboard/shared/content-type/index';

import { MOCK_NIMBUS_ACCOUNT } from './mocks/mock.nimbus-account';

@Injectable()
export class NimbusAccountService {

  private nimbusAccount: NimbusAccount;
  private files: Subject<CloudFile> = new Subject<CloudFile>();

  public constructor(
    //private userService: UserService,
  ) { }

  public load() {
    this.nimbusAccount = MOCK_NIMBUS_ACCOUNT;

    // this.loadFiles();
  }

  public loadFiles() {
    this.nimbusAccount.cloudAccounts.forEach(function(acct: CloudAccount, idx: number){
      acct.files.forEach(function (cloudfile: CloudFile){
        this.next(cloudfile);
      }, this);
    }, this.files)
  }

  public getFiles() : Observable<CloudFile> {
    console.log("getFiles")
    return this.files.asObservable();
  }

  public filter(type: ContentType) {
    this.nimbusAccount.cloudAccounts.forEach(function(acct: CloudAccount, idx: number){
      acct.files
        .filter(function (cloudFile: CloudFile, idx: number){
          return cloudFile.contentType == type.type;
        })
        .forEach(function (cloudfile: CloudFile){
          this.next(cloudfile);
        }, this);
    }, this.files)
  }

}

