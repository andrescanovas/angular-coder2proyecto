import { Component } from '@angular/core';
import { AlumnosAPI } from './alumnos-api';
import { Student } from '../../../shared/entities';
import { CommonModule, JsonPipe } from '@angular/common';
import { StudentTable } from '../../student-table/student-table';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-alumnos',
  imports: [CommonModule,StudentTable],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.scss'
})
export class Alumnos {
  alumnos! : Student[];
  constructor(private alumnosApi: AlumnosAPI) { }

  ngOnInit() {
    // cuando llegan los datos, hacer esto
    // 
    this.alumnosApi.getAlumnos().subscribe(alumnos => {
       this.alumnos = alumnos;
    });

   
  }

  deleteStudent(student: Student) {
     console.log("Eliminando alumno", student);

     this.alumnosApi.deleteAlumno(student).subscribe(() => {
       this.alumnosApi.getAlumnos().subscribe(alumnos => {
         this.alumnos = alumnos;
       });
     });

    this.alumnosApi.deleteAlumno(student).pipe(
    switchMap(()=> this.alumnosApi.getAlumnos())
    ).subscribe(alumnos =>{
      this.alumnos =this.alumnos;
    });

    }
}