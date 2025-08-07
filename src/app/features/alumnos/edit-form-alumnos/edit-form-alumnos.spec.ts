import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormAlumnos } from './edit-form-alumnos';

describe('EditFormAlumnos', () => {
  let component: EditFormAlumnos;
  let fixture: ComponentFixture<EditFormAlumnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFormAlumnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFormAlumnos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
