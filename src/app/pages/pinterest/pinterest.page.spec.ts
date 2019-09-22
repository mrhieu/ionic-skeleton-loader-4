import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestPage } from './pinterest.page';

describe('PinterestPage', () => {
  let component: PinterestPage;
  let fixture: ComponentFixture<PinterestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinterestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinterestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
