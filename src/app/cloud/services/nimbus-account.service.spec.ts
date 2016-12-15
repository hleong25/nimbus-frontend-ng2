/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NimbusAccountService } from './nimbus-account.service';

describe('NimbusAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NimbusAccountService]
    });
  });

  it('should ...', inject([NimbusAccountService], (service: NimbusAccountService) => {
    expect(service).toBeTruthy();

    let account = service.create();
    console.log(JSON.stringify(account, null, '  '));
  }));
});
