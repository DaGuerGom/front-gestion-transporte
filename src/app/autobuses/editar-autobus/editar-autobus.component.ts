import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Autobus } from 'src/app/interfaces/autobus';
import { AutobusService } from 'src/app/services/autobus.service';
import Swal from 'sweetalert2';
import { AutobusesComponent } from '../autobuses.component';

@Component({
  selector: 'app-editar-autobus',
  templateUrl: './editar-autobus.component.html',
  styleUrls: ['./editar-autobus.component.css']
})
export class EditarAutobusComponent implements OnInit{
  autobus!:Autobus
  capacidadAntigua!:number //Para evitar que se le reduzca la capacidad al autobús y que haya conflictos con usuarios que se queden fuera.

  constructor(private service:AutobusService,private router:Router,private aRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.service.obtenerAutobusPorId(this.aRoute.snapshot.params["id"]).subscribe(
      resp=>{
        this.autobus=resp
        this.capacidadAntigua=this.autobus.capacidad
      }
      )
  }
  
  editarAutobus():void{
    if(this.autobus.nombre==""){
      document.getElementsByName("nombre")[0].classList.add("is-invalid")
    }
    else if(this.autobus.capacidad<this.capacidadAntigua){
      document.getElementsByName("nombre")[0].classList.remove("is-invalid")
      Swal.fire(
        '¡Error!',
        'La capacidad no puede ser menor',
        'error')
    }
    else{
      document.getElementsByName("nombre")[0].classList.remove("is-invalid")
      Swal.fire({
        title: '¿Seguro que quieres editar el autobús?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
      }).then(resp=>{
        if (resp.isConfirmed) {
          console.log(this.autobus)
          this.service.actualizarAutobus(this.autobus).subscribe(
            resp=>{
              {Swal.fire(
                '¡Correcto!',
                'El autobús se ha actualizado con éxito',
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
