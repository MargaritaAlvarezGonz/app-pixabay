import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  //hay que hacer un observable para comunicar entre el componente del error y el componente de la imagen
  //para ello vamos a usar un observable y lo primero que hacemos es definir una variable

  private error$ = new Subject<string>();
  private terminoBusqueda$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  //vamos a hacer un método que va a hacer que el error esté escuchando cuando se busque una imagen

  setError(mensaje:string){
    this.error$.next(mensaje);
  }

  getError(): Observable<string>{
    return this.error$.asObservable();
  }

  enviarTerminoBusqueda(termino: string){
    this.terminoBusqueda$.next(termino);
  }

  getTerminoBusqueda(): Observable<string>{
    return this.terminoBusqueda$.asObservable();
  }

  getImagenes(termino:string, imagenesPorPagina:number, paginaActual: number  ): Observable<any>{
    const KEY ='39515532-abe6966af74f2aa91589cf994';
    const URL = 'https://pixabay.com/api/?key='+ KEY +'&q=' + termino + '&per_page=' +
                imagenesPorPagina + '&page=' + paginaActual ;
    return this.http.get(URL);
  }
}
