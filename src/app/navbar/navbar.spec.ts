import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule }              from '@angular/common';
import { RouterTestingModule }       from '@angular/router/testing';

import { Navbar }                    from './navbar';

describe('Navbar', () => {
  let component: Navbar;
  let fixture:   ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Navbar,                         
        CommonModule,                   
        RouterTestingModule.withRoutes([]) 
      ]
    })
    .compileComponents();

    fixture   = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});