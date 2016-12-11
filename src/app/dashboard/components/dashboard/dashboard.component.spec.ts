/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';

import { CoreModule } from '../../../core/core.module';
import { ContentTypeModule } from '../../shared/content-type/content-type.module';
import { SearchBoxModule } from '../../shared/search-box/search-box.module';

// import { DashboardRoutingModule } from '../../dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        ContentTypeModule,
        SearchBoxModule,
      ],
      declarations: [
        DashboardComponent,
      ],
      providers: [
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('size of content types should be 4',
    fakeAsync(() => {
      component.ngOnInit();
      tick();
      expect(component.contentTypes).toBeDefined();
      expect(component.contentTypes.length).toBe(4);
    }));
});
