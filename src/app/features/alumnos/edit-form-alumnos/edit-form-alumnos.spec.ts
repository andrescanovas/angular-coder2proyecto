import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule }              from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterTestingModule }       from '@angular/router/testing';

import { EditFormAlumnos }           from './edit-form-alumnos';

describe('EditFormAlumnos', () => {
  let fixture:   ComponentFixture<EditFormAlumnos>;
  let component: EditFormAlumnos;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EditFormAlumnos,
        CommonModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    // 1) Creamos la instancia del componente
    fixture   = TestBed.createComponent(EditFormAlumnos);
    component = fixture.componentInstance;

    // 2) Inyectamos un FormGroup **antes** de detectChanges()
    const fb = TestBed.inject(FormBuilder);
    component.form = fb.group({
      name: ['Test Nombre'],   // tu control “nombre”
      edad:   [  30 ]            // tu control “edad”
    });

    // 3) Ahora sí renderizamos el template
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});