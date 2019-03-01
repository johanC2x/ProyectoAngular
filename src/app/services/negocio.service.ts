import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  uri='http://localhost:4000/negocio';

  constructor(private http: HttpClient) { }

  addNegocio(nombre_persona, nombre_negocio, numero_gst_negocio){
    const obj={
      nombre_persona: nombre_persona,
      nombre_negocio: nombre_negocio,
      numero_gst_negocio: numero_gst_negocio
    };

    console.log(obj);
    this.http.post(`${this.uri}/add`,obj)
    .subscribe(res=>console.log('Done'));
  }
}
