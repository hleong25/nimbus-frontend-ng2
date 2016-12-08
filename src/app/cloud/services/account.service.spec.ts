/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountService } from './account.service';

import { CloudType } from '../models/cloud-type';

describe('AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountService]
    });
  });

  it('should ...', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();

    let account = service.create(CloudType.Local, "", function():string {return ""});
    console.log(JSON.stringify(account, null, '  '));
  }));
});
