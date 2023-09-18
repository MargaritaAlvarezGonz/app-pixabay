import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent implements OnInit {

  //creamos aquí una variable que se llama nombre imagen;
  nombreImagen:string;

  constructor() {
    this.nombreImagen="";
   }

  ngOnInit(): void {
  }

  buscarImagenes(){
    console.log(this.nombreImagen)

  }

}
