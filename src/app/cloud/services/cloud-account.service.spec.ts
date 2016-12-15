/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CloudAccountService } from './cloud-account.service';

import { CloudType } from '../models/cloud-type';

describe('AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloudAccountService]
    });
  });

  it('should ...', inject([CloudAccountService], (service: CloudAccountService) => {
    expect(service).toBeTruthy();

    let account = service.create(CloudType.Local, "", function():string {return ""});
    console.log(JSON.stringify(account, null, '  '));
  }));
});
