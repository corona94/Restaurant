import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDessert } from './menu-dessert';

describe('MenuDessert', () => {
  let component: MenuDessert;
  let fixture: ComponentFixture<MenuDessert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDessert],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuDessert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
