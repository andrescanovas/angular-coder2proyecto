import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTable } from '../../student-table/student-table';
import { AlumnosAPI } from './alumnos-api';
import { Student } from '../../../shared/entities';
import { Subject, merge, of } from 'rxjs';
import { catchError, map, shareReplay, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, StudentTable],
  templateUrl: './alumnos.html',
  styleUrls: ['./alumnos.scss'],
})
export class Alumnos{
  constructor(private AlumnosAPI: AlumnosAPI) {}


  private reload$  = new Subject<void>();
  private delete$  = new Subject<Student>();

 
  alumnos$ = merge(
    of(void 0),             
    this.reload$             
  ).pipe(
    switchMap(() =>
      this.AlumnosAPI.getAlumnos().pipe(
        map(students => ({ students, error: null as string | null, loading: false })),
        startWith({ students: [] as Student[], error: null, loading: true }),
        catchError(() =>
          of({ students: [] as Student[], error: 'No se pudieron cargar los alumnos', loading: false })
        )
      )
    ),

    shareReplay(1)
  );


  _ = this.delete$.pipe(
    switchMap(student =>
      this.AlumnosAPI.deleteAlumno(student).pipe(

        map(() => this.reload$.next())
      )
    )
  ).subscribe(); 


  deleteStudent(student: Student) {
    this.delete$.next(student);
  }
}
