/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContentTypeModule } from '../content-type/content-type.module';
import { SearchBoxModule } from '../search-box/search-box.module';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ContentTypeModule,
        SearchBoxModule,
      ],
      declarations: [
        DashboardComponent,
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
