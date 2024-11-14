import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http:HttpClient) { }
  invocable_1(){
    let dato = "Función 1 invocada";
    return dato;
  }

  invocable_2(){
    let dato = "Función 2 invocada";
    return dato;
  }

  invocable_3(){
    let dato = "Función 3 invocada";
    return dato;
  }

  sumar (numero:any){
    let dato = 1975;
    return (dato + numero);
  }

  sumar2 (numero:any, numero2:any){
    return (numero + numero2);
  }

  promedio(numero:any, numero2:any){
    return (numero + numero2)/2;
  }
}
