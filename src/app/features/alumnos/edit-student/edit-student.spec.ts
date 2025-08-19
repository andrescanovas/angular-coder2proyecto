import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule }              from '@angular/common';
import { ReactiveFormsModule }       from '@angular/forms';
import { RouterTestingModule }       from '@angular/router/testing';
import { HttpClientTestingModule }   from '@angular/common/http/testing';
import { ActivatedRoute }            from '@angular/router';
import { of }                        from 'rxjs';

import { EditStudent }               from './edit-student';

describe('EditStudent', () => {
  let component: EditStudent;
  let fixture:   ComponentFixture<EditStudent>;

  // Stub si tu componente lee params con ActivatedRoute
  const activatedRouteStub = {
    snapshot: { paramMap: { get: (_: string) => '1' } },
    params: of({ id: '1' })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EditStudent,                       // tu standalone component
        CommonModule,                      // ngIf, ngFor, Pipes…
        ReactiveFormsModule,               // FormBuilder, formGroup…
        RouterTestingModule.withRoutes([]),// routerLink, RouterOutlet, ActivatedRoute…
        HttpClientTestingModule            // HttpClient / _HttpClient
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();

    fixture   = TestBed.createComponent(EditStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});