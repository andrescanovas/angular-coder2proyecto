import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../../../shared/entities';
import { CommonModule, JsonPipe } from '@angular/common';
import { StudentTable } from '../../../student-table/student-table';

@Component({
  selector: 'app-view-student',
  imports: [CommonModule,StudentTable],
  templateUrl: './view-student.html',
  styleUrl: './view-student.scss'
})
export class ViewStudent {

  student: Student | undefined;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.student = navigation?.extras.state?.["student"];
  }
}