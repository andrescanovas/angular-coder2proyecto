// src/app/usuario/usuario.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule }              from '@angular/common';
import { RouterTestingModule }       from '@angular/router/testing';

import { Usuario }                   from './usuario';

describe('Usuario', () => {
  let component: Usuario;
  let fixture:   ComponentFixture<Usuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Usuario,                          
        CommonModule,                     
        RouterTestingModule.withRoutes([]) 
      ]
    }).compileComponents();

    fixture   = TestBed.createComponent(Usuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});