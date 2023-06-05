import { Component, OnInit } from '@angular/core';
import { ParadaService } from '../services/parada.service';
import { Parada } from '../interfaces/parada';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paradas',
  templateUrl: './paradas.component.html',
  styleUrls: ['./paradas.component.css']
})
export class ParadasComponent implements OnInit{
  constructor(private service:ParadaService, private router:Router){}

  paradas:Parada[]=[]

  ngOnInit(): void {
    this.service.obtenerParadas().subscribe(
      resp=>{
        this.paradas=resp
      }
    )
  }

  borrarParada(id:number):void{
    Swal.fire({
      title: '¿Seguro que quieres borrar la parada?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then(resp=>{
      if (resp.isConfirmed) {
        this.service.borrarParada(id).subscribe(
          resp=>{
            Swal.fire({
              confirmButtonColor: "#ff6d43",
              title: 'Parada eliminada con éxito',
              icon: 'success'
            })
            this.ngOnInit()
          }
        )
      }
    })
  }

  editarParada(id:number){
    this.router.navigate(["/actualizarParada",id])
  }
}
