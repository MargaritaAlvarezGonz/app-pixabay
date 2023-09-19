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
  loading = false;
  imagenesPorPagina = 30;
  paginaActual = 1;
  calcularTotalPaginas = 0;

  constructor(private _imagenService: ImagenService) {
    this.suscription = this._imagenService.getTerminoBusqueda().subscribe(data => {
      this.termino = data;
      this.loading= true;
      this.obtenerImagenes();
    })
  }

  ngOnInit(): void {
  }

  obtenerImagenes(){
    this._imagenService.getImagenes(this.termino).subscribe(data =>{
      this.loading= false;

      if(data.hits.length === 0){
        this._imagenService.setError('Upsi, no encontramos ningún resultado');
        return;
      }

      this.calcularTotalPaginas = Math.ceil(data.totalHits/ this.imagenesPorPagina);
      this.listImagenes = data.hits;
    }, error => {
      this._imagenService.setError('Upsi... ocurrió un error inesperado');
      this.loading= false;
    })
  }

  paginaAnterior(){
    this.paginaActual--;
  }
  paginaPosterior(){
    this.paginaActual++;
  }

}
