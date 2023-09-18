import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent implements OnInit {

  //creamos aquí una variable que se llama nombre imagen;
  nombreImagen:string;
  //aquí en el constructor tenemos que inyectar el servicio
  constructor(private _imagenService: ImagenService) {
    this.nombreImagen="";
   }

  ngOnInit(): void {
  }

  buscarImagenes(){
    if(this.nombreImagen === '') {
      this._imagenService.setError('Agrega un texto de búsqueda');
      return;

    }
    this._imagenService.enviarTerminoBusqueda(this.nombreImagen);

  }

}
