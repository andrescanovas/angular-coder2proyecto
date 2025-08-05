import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCursos } from './view-cursos';

describe('ViewCursos', () => {
  let component: ViewCursos;
  let fixture: ComponentFixture<ViewCursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCursos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCursos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
