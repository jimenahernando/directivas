import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  // almacena la seccion en la que va a estar seleccionada
  seccion: string;

  constructor() { 
    this.seccion = "sobremi";
  }

  ngOnInit(): void {
    
  }

  cargarSeccion(seccion: any){
    this.seccion = seccion;
  }
}
