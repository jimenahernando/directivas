import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit{
  
  color: string;
  fontSize: string
  // lo creamos como ubjeto de tipo JSON
  estilosParrafo : any;
  
  borderWidth: string;
  borderColor: string;

  bgColor: string;

  constructor() { 
    this.color = 'green';
    this.fontSize = '1.2rem';

    this.estilosParrafo = {
      backgroundColor: 'tomato',
      fontSize: '24px',
      color: 'white',
      padding: '20px'
    }

    this.borderWidth= "";
    this.borderColor= "''";

    this.bgColor = "#ff0000";
  }
  
  ngOnInit(): void {
    let color = 0;
    const intervalo = setInterval(() => {
      color += 80;
      // console.log(this.bgColor);
      this.bgColor = '#ff' + color + color;
    }, 3000);
  }
  

  cambiarFuente($event: any){
    // $event.target.value toma el valor
    this.fontSize = $event.target.value + 'px';
  }

  cambiarEstilo(){
    this.estilosParrafo.border = `${this.borderWidth}px solid ${this.borderColor}`;
  }
}
