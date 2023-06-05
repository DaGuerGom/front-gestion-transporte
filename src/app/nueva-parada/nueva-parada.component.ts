import { Component } from '@angular/core';
import { ParadaService } from '../services/parada.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ParadaSubmit } from '../interfaces/parada';

@Component({
  selector: 'app-nueva-parada',
  templateUrl: './nueva-parada.component.html',
  styleUrls: ['./nueva-parada.component.css']
})
export class NuevaParadaComponent {
  nombre:string=""

  constructor(private service:ParadaService,private router:Router){}

  crearParada():void{
    if(this.nombre==""){
      document.getElementsByName("nombre")[0].classList.add("is-invalid")
    }
    else{
      document.getElementsByName("nombre")[0].classList.remove("is-invalid")
      Swal.fire({
        title: '¿Seguro que quieres crear la parada?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
      }).then(resp=>{
        if (resp.isConfirmed) {
          let parada:ParadaSubmit={
            nombre:this.nombre,
            rutas:[],
            usuarios:[]
          }
          this.service.crearParada(parada).subscribe(
            resp=>{
              {Swal.fire(
                '¡Correcto!',
                'La parada se ha creado con éxito',
                'success')
                this.router.navigate(["/paradasAdmin"])
              }
            }
          )
        }
      })
    }
      
    }
}
