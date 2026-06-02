import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCar } from './add-to-car';

describe('AddToCar', () => {
  let component: AddToCar;
  let fixture: ComponentFixture<AddToCar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToCar],
    }).compileComponents();

    fixture = TestBed.createComponent(AddToCar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
