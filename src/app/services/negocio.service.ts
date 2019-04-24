import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  uri='http://localhost:4000/negocio';

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore
  ) { }

  addNegocio(nombre_persona,apellido_persona,edad_persona){
    const obj={
      nombre_persona: nombre_persona,
      apellido_persona: apellido_persona,
      edad_persona: edad_persona,
    };
    
    return this.firestore.collection('persona').add(obj);
    /*
    this.http.post(`${this.uri}/add`,obj)
    .subscribe(res=>console.log('Done'));
    */
  }

  getNegocios(){
    return this.firestore.collection('persona').snapshotChanges();
    //return this.http.get(`${this.uri}`);
  }

  editNegocio(id){
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateNegocio(nombre_persona,apellido_persona,edad_persona,id){
    const obj={
      nombre_persona: nombre_persona,
      apellido_persona:apellido_persona,
      edad_persona:edad_persona
    };
    this.http
    .post(`${this.uri}/update/${id}`,obj)
    .subscribe(res => console.log('Done'));
  }

  deleteNegocio(id){
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
