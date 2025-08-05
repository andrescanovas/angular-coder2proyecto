import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Inscripcion } from '../../../../shared/entities';

@Component({
  selector: 'app-view-inscripciones',
  standalone:true,
  imports: [RouterModule,CommonModule],
  templateUrl: './view-inscripciones.html',
  styleUrl: './view-inscripciones.scss'
})
export class ViewInscripciones implements OnInit {
  inscripcion!: Inscripcion;

  ngOnInit(): void {
    // recoge el objeto pasado por router.navigate(...)
    this.inscripcion =
      (history.state as { inscripcion: Inscripcion }).inscripcion;
  }
}