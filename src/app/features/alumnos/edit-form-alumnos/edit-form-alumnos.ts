import {
  Component, Input, Output, EventEmitter,
  OnInit, OnChanges, SimpleChanges
} from '@angular/core';
import { CommonModule }from '@angular/common';
import {  ReactiveFormsModule,  FormBuilder,  FormGroup,Validators} from '@angular/forms';
import { Student } from '../../../../shared/entities';


@Component({
  selector:   'app-edit-form-alumnos',
  standalone: true,
  imports:    [ CommonModule, ReactiveFormsModule ],
  templateUrl:'./edit-form-alumnos.html',
  styleUrls:  ['./edit-form-alumnos.scss']
})
export class EditFormAlumnos implements OnInit, OnChanges {
  @Input()  student!: Student;
  @Output() save    = new EventEmitter<Student>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.student) this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['student'] && this.student) {
      this.buildForm();
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      name:    [ this.student.name,      Validators.required ],
      surname: [ this.student.surname ],
      age:     [ this.student.age,       [Validators.min(0), Validators.max(150)] ],
      dni:     [ this.student.dni ],
      average: [ this.student.average ]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const updated: Student = {
      ...this.student,
      ...this.form.value
    };
    this.save.emit(updated);
  }
}