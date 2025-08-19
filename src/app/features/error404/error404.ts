import { Component } from '@angular/core';
import { Location }from '@angular/common';
@Component({
  selector: 'app-error404',
  imports: [],
  templateUrl: './error404.html',
  styleUrl: './error404.scss'
})
export class Error404 {
  constructor(private location:Location) {}


  goBack() {
    this.location.back();
  }
}
