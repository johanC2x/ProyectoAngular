import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.angForm=this.fb.group({
      nombre_persona :['', Validators.required],
      nombre_negocio:['',Validators.required],
      numero_gst_negocio:['',Validators.required]
    });
  }

  ngOnInit() {
  }

}
