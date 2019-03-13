import { Component, OnInit } from '@angular/core';
import Negocio from '../model/Negocio';
import { NegocioService } from '../services/negocio.service';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  negocios: Negocio[];
  constructor( private ns: NegocioService) { }

  ngOnInit() {
    this.ns.getNegocios().subscribe(
      (data: Negocio[])=>{
        this.negocios=data;
      }
    );
  }

  deleteNegocio(id){
    this.ns.deleteNegocio(id).subscribe(res=>{
      console.log('Eliminado');
    });
  }

}
