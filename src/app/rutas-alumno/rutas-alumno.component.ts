import { Component, OnInit } from '@angular/core';
import { Ruta } from '../interfaces/ruta';
import { RutaService } from '../services/ruta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas-alumno',
  templateUrl: './rutas-alumno.component.html',
  styleUrls: ['./rutas-alumno.component.css']
})
export class RutasAlumnoComponent implements OnInit{
  rutas!:Ruta[];

  constructor(private service:RutaService,private router:Router){}
  
  ngOnInit(): void {
    this.service.obtenerRutas().subscribe(resp=>{
      this.rutas=resp
    })
  }

  accederAltaRuta(id:number):void{
    this.router.navigate(["asignarRutas",id])
  }
}
