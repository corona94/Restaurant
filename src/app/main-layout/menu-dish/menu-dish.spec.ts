import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDish } from './menu-dish';

describe('MenuDish', () => {
  let component: MenuDish;
  let fixture: ComponentFixture<MenuDish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDish],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuDish);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
