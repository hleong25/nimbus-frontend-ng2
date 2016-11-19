/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { ContentTypeComponent } from './content-type/content-type.component';
import { ContentTypeService } from './content-type/content-type.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        ContentTypeComponent,
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
