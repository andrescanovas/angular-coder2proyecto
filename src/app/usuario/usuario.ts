import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuario',
  imports: [RouterModule],
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss'
})
export class Usuario {
   urlImg = 'https://i.pinimg.com/736x/62/5b/04/625b044f8ffd812d24af3c60fb8d2156.jpg'
   
   id: string | null;

   constructor(private activatedRoute: ActivatedRoute) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }
}