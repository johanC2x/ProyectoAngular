import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NegocioService} from '../services/negocio.service'

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder,private ns: NegocioService) {
    this.createForm();
  }

  createForm(){
    this.angForm=this.fb.group({
      nombre_persona :['', Validators.required],
      apellido_persona :['', Validators.required],
      edad_persona :[0, Validators.required]
    });
  }

  addNegocio(nombre_persona,apellido_persona,edad_persona){
   this.ns.addNegocio(nombre_persona,apellido_persona,edad_persona);
  }


  ngOnInit() {
  }

}
