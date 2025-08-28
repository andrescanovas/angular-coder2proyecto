import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { FullnamePipe } from '../../shared/pipes/fullname-pipe';
import { Student } from '../../shared/entities';
import { RoutePaths } from '../../shared/routes';

@Component({
  selector: 'app-student-table',
  standalone: true,                      
  imports: [MatTableModule, FullnamePipe],
  templateUrl: './student-table.html',
  styleUrls: ['./student-table.scss']    
})
export class StudentTable {
  @Input() students: Student[] = [];
  @Output() deleteEvent = new EventEmitter<Student>();  

  displayedColumns: string[] = ['fullname', 'age', 'dni', 'average', 'actions'];

  constructor(private router: Router) {}

  private routes = RoutePaths;

  viewDetails(student: Student) {
    this.router.navigate(['/view-student'], { state: { student } });
  }

  deleteStudent(student: Student) {
    this.deleteEvent.emit(student);
  }

  editStudent(student: Student) {
    this.router.navigate([this.routes.EDITSTUDENT], { state: { student } });
  }
}
