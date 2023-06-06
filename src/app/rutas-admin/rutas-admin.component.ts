import { Component, OnInit } from '@angular/core';
import { RutaService } from '../services/ruta.service';
import { Ruta } from '../interfaces/ruta';

@Component({
  selector: 'app-rutas-admin',
  templateUrl: './rutas-admin.component.html',
  styleUrls: ['./rutas-admin.component.css']
})
export class RutasAdminComponent implements OnInit{

  rutas!:Ruta[]

  constructor(private service:RutaService){}

  ngOnInit(): void {
    this.service.obtenerRutas().subscribe(
      resp=>{
        this.rutas=resp
      }
    )
  }

}
