import { Component, OnInit } from '@angular/core';
import { RutaService } from '../services/ruta.service';
import { Ruta } from '../interfaces/ruta';
import Swal from 'sweetalert2';

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

  borrarRuta(id:number){
    Swal.fire({
      title: '¿Seguro que quieres borrar la ruta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then(resp=>{
      if (resp.isConfirmed) {
        this.service.borrarRuta(id).subscribe(
          resp=>{
            Swal.fire({
              confirmButtonColor: "#ff6d43",
              title: 'Ruta eliminada con éxito',
              icon: 'success'
            })
            this.ngOnInit()
          }
        )
      }
    })
  }
}
