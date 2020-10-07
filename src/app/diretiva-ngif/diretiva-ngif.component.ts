import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["Angular2"]

  mostrarCursos: boolean = false;

  onClickButton() {
    this.mostrarCursos = this.mostrarCursos == true ? false : true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
