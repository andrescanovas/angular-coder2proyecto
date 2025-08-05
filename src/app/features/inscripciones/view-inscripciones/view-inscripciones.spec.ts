import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInscripciones } from './view-inscripciones';

describe('ViewInscripciones', () => {
  let component: ViewInscripciones;
  let fixture: ComponentFixture<ViewInscripciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewInscripciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInscripciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
