import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  numProductos: number;

  constructor() { 
    this.numProductos = 5;
  }

  ngOnInit(): void {
  }

}
