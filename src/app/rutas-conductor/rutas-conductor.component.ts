import { Component, OnInit } from '@angular/core';
import { Ruta } from '../interfaces/ruta';
import { RutaService } from '../services/ruta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rutas-conductor',
  templateUrl: './rutas-conductor.component.html',
  styleUrls: ['./rutas-conductor.component.css']
})
export class RutasConductorComponent implements OnInit{

  rutas!:Ruta[]

  constructor(private service:RutaService,private aRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.service.obtenerRutasPorConductor(this.aRoute.snapshot.params["username"]).subscribe(resp=>{this.rutas=resp
    console.log(resp)})
  }


}
