import { Component, OnInit } from '@angular/core';
import { Autobus } from '../interfaces/autobus';
import { AutobusService } from '../services/autobus.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autobuses',
  templateUrl: './autobuses.component.html',
  styleUrls: ['./autobuses.component.css']
})
export class AutobusesComponent implements OnInit{
  
  constructor(private service:AutobusService,private router:Router){}

  autobuses!:Autobus[]

  ngOnInit(): void {
    this.service.obtenerAutobuses().subscribe(
      resp=>{
        this.autobuses=resp
      }
    )
  }

  editarAutobus(autobus:Autobus){
    this.router.navigate(["/editarAutobus",autobus.id])
  }

  eliminarAutobus(id:number):void{
    Swal.fire({
      title: '¿Seguro que quieres borrar el autobús?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then(resp=>{
      if (resp.isConfirmed) {
        this.service.borrarAutobus(id).subscribe(
          resp=>{
            Swal.fire({
              confirmButtonColor: "#ff6d43",
              title: 'Autobús eliminado con éxito',
              icon: 'success'
            })
            this.ngOnInit()
          }
        )
      }
    })
  }
}
