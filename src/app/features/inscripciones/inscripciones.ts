import { Component, OnInit }     from '@angular/core';
import { CommonModule }           from '@angular/common';
import { HttpClientModule }       from '@angular/common/http';
import { MatTableModule }         from '@angular/material/table';  
import { Inscripcion }            from '../../../shared/entities';
import { InscripcionesApi }       from './inscripciones-api';

@Component({
  selector:    'app-inscripciones',
  standalone:  true,
  imports:     [CommonModule, HttpClientModule],
  templateUrl: './inscripciones.html',
  styleUrls:   ['./inscripciones.scss']
})
export class Inscripciones implements OnInit {
  inscripciones: Inscripcion[] = [];

  constructor(private api: InscripcionesApi) {}

  ngOnInit(): void {
    this.api.getInscripciones()
      .subscribe(list => this.inscripciones = list);
  }
}