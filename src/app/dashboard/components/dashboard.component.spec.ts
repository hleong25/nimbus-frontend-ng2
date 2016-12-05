/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { ContentTypeComponent, ContentTypeService } from '../content-type/content-type.exports';
import { SearchBoxComponent } from '../search-box/search-box.exports'

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        ContentTypeComponent,
        SearchBoxComponent,
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
