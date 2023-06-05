import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutobusSubmit } from 'src/app/interfaces/autobus';
import { AutobusService } from 'src/app/services/autobus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-autobus',
  templateUrl: './nuevo-autobus.component.html',
  styleUrls: ['./nuevo-autobus.component.css']
})
export class NuevoAutobusComponent {
  constructor(private router:Router,private service:AutobusService){}
  nombre:string="";
  capacidad:number=32;

  crearAutobus():void{
    if(this.nombre==""){
      document.getElementsByName("nombre")[0].classList.add("is-invalid")
    }
    else{
      document.getElementsByName("nombre")[0].classList.remove("is-invalid")
      Swal.fire({
        title: '¿Seguro que quieres crear el autobús?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
      }).then(resp=>{
        if (resp.isConfirmed) {
          let autobus:AutobusSubmit={
            nombre:this.nombre,
            capacidad:this.capacidad,
            rutas:[]
          }
          this.service.guardarAutobus(autobus).subscribe(
            resp=>{
              {Swal.fire(
                '¡Correcto!',
                'El autobús se ha creado con éxito',
                'success')
                this.router.navigate(["/autobuses"])
              }
            }
          )
        }
      })
    }
      
  }
}
