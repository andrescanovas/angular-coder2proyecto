import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuario',
  imports: [RouterModule],
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss'
})
export class Usuario {
   id: string | null;

   constructor(private activatedRoute: ActivatedRoute) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }
}