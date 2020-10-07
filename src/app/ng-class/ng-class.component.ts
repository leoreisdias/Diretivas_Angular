import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  meuFavorito: boolean = true;

  favoritar() {
    this.meuFavorito = this.meuFavorito ? false : true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
