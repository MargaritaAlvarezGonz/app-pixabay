import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent implements OnInit {

  termino = '';
  suscription : Subscription;
  listImagenes: any [] = [];

  constructor(private _imagenService: ImagenService) {
    this.suscription = this._imagenService.getTerminoBusqueda().subscribe(data => {
      this.termino = data;
      this.obtenerImagenes();
    })
  }

  ngOnInit(): void {
  }

  obtenerImagenes(){
    this._imagenService.getImagenes(this.termino).subscribe(data =>{
      console.log(data);

      if(data.hits.length === 0){
        this._imagenService.setError('Upsi, no encontramos ningún resultado');
        return;
      }
      this.listImagenes = data.hits;
    }, error => {
      this._imagenService.setError('Upsi... ocurrió un error inesperado')
    })
  }

}
