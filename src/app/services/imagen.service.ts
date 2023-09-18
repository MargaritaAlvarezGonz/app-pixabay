import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  //hay que hacer un observable para comunicar entre el componente del error y el componente de la imagen
  //para ello vamos a usar un observable y lo primero que hacemos es definir una variable

  private $error = new Subject<string>();

  constructor() { }

  //vamos a hacer un método que va a hacer que el error esté escuchando cuando se busque una imagen

  setError(mensaje:string){
    this.$error.next(mensaje);
  }

  getError(): Observable<string>{
    return this.$error.asObservable();
  }
}
