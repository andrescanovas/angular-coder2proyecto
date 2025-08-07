import { AlumnosAPI } from './../alumnos-api';
import { Component } from '@angular/core';
import { Student } from '../../../../shared/entities';
import { Router, RouterEvent } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EditFormAlumnos } from '../edit-form-alumnos/edit-form-alumnos';

@Component({
  selector: 'app-edit-student',
  imports: [CommonModule,ReactiveFormsModule,EditFormAlumnos],
  templateUrl: './edit-student.html',
  styleUrl: './edit-student.scss'
})
export class EditStudent {

  student: Student | null = null
  

    constructor(private router: Router, private alumnosAPI: AlumnosAPI) {
     const navigation = this.router.getCurrentNavigation();
     this.student = navigation?.extras?.state?.['student'] || null;
   }

   onSubmit(updatedStudent: Student) {
   
     this.alumnosAPI.updateStudent(updatedStudent).subscribe(response => {
       console.log("Respuesta del servidor:", response);
       this.router.navigate([''])
     }); 
   }

   onSave(updated: Student) {
    this.alumnosAPI.updateStudent(updated)
      .subscribe(() => this.router.navigate(['/alumnos']));
  }


}
