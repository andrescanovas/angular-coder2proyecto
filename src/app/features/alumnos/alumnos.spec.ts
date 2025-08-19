import { ComponentFixture, TestBed }  from '@angular/core/testing';
import { CommonModule }               from '@angular/common';
import { RouterTestingModule }        from '@angular/router/testing';
import { HttpClientTestingModule }    from '@angular/common/http/testing';

import { Alumnos }                    from './alumnos';
import { AlumnosAPI }                 from './alumnos-api';

describe('Alumnos', () => {
  let fixture:   ComponentFixture<Alumnos>;
  let component: Alumnos;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Alumnos,                       
        CommonModule,                  
        RouterTestingModule.withRoutes([]), 
        HttpClientTestingModule       
      ],
      providers: [
        AlumnosAPI                     
      ]
    })
    .compileComponents();

    fixture   = TestBed.createComponent(Alumnos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});