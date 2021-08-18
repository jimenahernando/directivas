import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  numProductos: number;

  departamento: string;
  arrTrabajadores: any[];

  constructor() { 
    this.numProductos = 6;
    this.departamento = 'Contabilidad';
    this.arrTrabajadores = [
      { 
        nombre: 'Roberto', 
        departamento: 'Desarrollo'
      },
      { 
        nombre: 'Julian', 
        departamento: 'Recursos Humanos'
      },
      { 
        nombre: 'Romina', 
        departamento: 'Desarrollo'
      },
      { 
        nombre: 'Adriana', 
        departamento: 'Contabilidad'
      },
    ];
  }

  ngOnInit(): void {
  }

}
