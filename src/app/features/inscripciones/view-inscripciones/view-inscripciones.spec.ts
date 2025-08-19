import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule }              from '@angular/common';
import { RouterTestingModule }       from '@angular/router/testing';

import { ViewInscripciones }         from './view-inscripciones';
import { Inscripcion } from '../../../../shared/entities';


describe('ViewInscripciones', () => {
  let fixture:   ComponentFixture<ViewInscripciones>;
  let component: ViewInscripciones;

  // 1) Stub EXACTO con las mismas propiedades que el template usa:
  const fakeInscripcion: Inscripcion = {
    id:     '42',
    name:   'Pepito Pérez',
    curso:  'Angular Básico'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ViewInscripciones,                 // tu componente standalone
        CommonModule,                      // ngIf, ngFor, pipes…
        RouterTestingModule.withRoutes([]) // routerLink, ActivatedRoute…
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    // 2) Preparamos history.state ANTES de montar el componente
    history.replaceState({ inscripcion: fakeInscripcion }, '');

    // 3) Creamos e iniciamos el componente
    fixture   = TestBed.createComponent(ViewInscripciones);
    component = fixture.componentInstance;
    fixture.detectChanges();  // dispara ngOnInit y monta el template
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar la inscripcion correcta', () => {
    // ahora component.inscripcion.id existe y es '42'
    expect(component.inscripcion).toEqual(fakeInscripcion);
  });
});