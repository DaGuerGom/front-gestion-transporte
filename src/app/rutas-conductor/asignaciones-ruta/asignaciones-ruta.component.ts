import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsignacionParadaService } from 'src/app/services/asignacion-parada.service';

@Component({
  selector: 'app-asignaciones-ruta',
  templateUrl: './asignaciones-ruta.component.html',
  styleUrls: ['./asignaciones-ruta.component.css']
})
export class AsignacionesRutaComponent implements OnInit{
  asignaciones!:any

  //Lista de las paradas disponibles, que se usaran tanto para mostrarse en la tabla como para obtener de ahi los usuarios asignados.
  paradasAsignadas:string[]=[]

  constructor(private asigService:AsignacionParadaService,private aRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.asigService.obtenerAsignacionesDeRuta(this.aRoute.snapshot.params["id"]).subscribe(resp=>{
      this.asignaciones=resp
      for(let asignacion of this.asignaciones){
        if(!this.paradasAsignadas.includes(asignacion.parada.nombre)){
          this.paradasAsignadas.push(asignacion.parada.nombre)
        }
      }
    })
  }

  obtenerUsuariosDeParada(nombre:string){
    let aDevolver=[]
    for (let asignacion of this.asignaciones){
      if (asignacion.parada.nombre==nombre){
        aDevolver.push(asignacion.usuario.username)
      }
    }
    return aDevolver
  }

}
