import { Component } from '@angular/core';
import { AlumnosAPI } from './alumnos-api';
import { Student } from '../../../shared/entities';
import { CommonModule } from '@angular/common';
import { StudentTable } from "../../student-table/student-table";

@Component({
  selector: 'app-alumnos',
  imports: [CommonModule, StudentTable],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.scss'
})
export class Alumnos {
alumnos! :Student[];
  constructor(private alumnosApi: AlumnosAPI) { }

  ngOnInit() {
   
    this.alumnosApi.getAlumnos().subscribe(alumnos => {
       this.alumnos = alumnos;
    });

   
  }

}
