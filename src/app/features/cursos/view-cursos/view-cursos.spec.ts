import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule }              from '@angular/common';
import { RouterTestingModule }       from '@angular/router/testing';
import { HttpClientTestingModule }   from '@angular/common/http/testing';
import { ViewCursos }                from './view-cursos';
import { Course } from '../../../../shared/entities';
;

describe('ViewCursos', () => {
  let fixture:   ComponentFixture<ViewCursos>;
  let component: ViewCursos;

  const fakeCourse: Course = {
    id:   '1',
    name: 'ANGULAR',
    img:  'https://…jpg'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ViewCursos,
        CommonModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    
    history.replaceState({ course: fakeCourse }, '');

    fixture   = TestBed.createComponent(ViewCursos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('carga el curso desde history.state', () => {
    expect(component.course).toEqual(fakeCourse);
  });
});