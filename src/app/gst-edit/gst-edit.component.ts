import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NegocioService } from '../services/negocio.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {

  negocio: any={};
  angForm:FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ns: NegocioService,
    private fb: FormBuilder ) {
      this.createForm();
     }

  createForm(){
    this.angForm=this.fb.group({
      nombre_persona: ['', Validators.required],
      nombre_negocio: ['', Validators.required],
      numero_gst_negocio: ['', Validators.required]
    });
  }   
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.ns.editNegocio(params['id']).subscribe(res=>{
        this.negocio=res;
      });
    });
  }

  updateNegocio(nombre_persona,nombre_negocio,numero_gst_negocio){
    this.route.params.subscribe(params => {
      this.ns.updateNegocio(nombre_persona,nombre_negocio,numero_gst_negocio,params['id']);
      this.router.navigate(['business']);
    });
  }
}
