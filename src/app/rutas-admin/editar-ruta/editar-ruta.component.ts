import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Autobus } from 'src/app/interfaces/autobus';
import { Parada } from 'src/app/interfaces/parada';
import { Ruta } from 'src/app/interfaces/ruta';
import { AutobusService } from 'src/app/services/autobus.service';
import { ParadaService } from 'src/app/services/parada.service';
import { RutaService } from 'src/app/services/ruta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-ruta',
  templateUrl: './editar-ruta.component.html',
  styleUrls: ['./editar-ruta.component.css']
})
export class EditarRutaComponent implements OnInit {
  ruta!:Ruta
  autobusesLibres!:Autobus[]
  paradas!:Parada[]
  constructor(private router:Router, private rService:RutaService, private pService:ParadaService,private aService:AutobusService, private aRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.aService.obtenerAutobusesLibres().subscribe(
      resp=>{
        this.autobusesLibres=resp
      }
    )
    this.pService.obtenerParadas().subscribe(
      resp=>{
        this.paradas=resp
      }
    )
    this.rService.obtenerRutaPorId(this.aRoute.snapshot.params["id"]).subscribe(resp=>{
      this.ruta=resp
    })
  }
  editarParada():void{
    if(this.validacionCorrecta()){
      Swal.fire({
        title: '¿Seguro que quieres editar la ruta?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
      }).then(resp=>{
        if(resp.isConfirmed){
          this.rService.actualizarRuta(this.ruta).subscribe(resp=>{
          Swal.fire(
            '¡Correcto!',
            'La ruta ha sido actualizada con éxito',
            'success')
            this.router.navigate(['/rutasAdmin'])
        })
        }
      })
    }
  }
  validacionCorrecta():boolean{
    let validacionCorrecta=true
    if(!this.ruta.nombre){
      document.getElementsByName("nombre")[0].classList.add("is-invalid")
      validacionCorrecta=false;
    }
    else{
      document.getElementsByName("nombre")[0].classList.remove("is-invalid")
    }
    if(!this.ruta.horaSalida){
      document.getElementsByName("horaSalida")[0].classList.add("is-invalid")
      validacionCorrecta=false;
    }
    else{
      document.getElementsByName("horaSalida")[0].classList.remove("is-invalid")
    }
    if(!this.ruta.horaLlegada){
      document.getElementsByName("horaLlegada")[0].classList.add("is-invalid")
      validacionCorrecta=false;
    }
    else{
      document.getElementsByName("horaLlegada")[0].classList.remove("is-invalid")
    }
    if(!this.ruta.paradas){
      document.getElementsByName("paradas")[0].classList.add("is-invalid")
      validacionCorrecta=false
    }
    else if(this.ruta.paradas.length<2){
      Swal.fire(
        '¡Error!',
        'Debe introducir al menos dos paradas',
        'error')
      validacionCorrecta=false
    }
    else{
      document.getElementsByName("paradas")[0].classList.remove("is-invalid")
    }
    if(!this.ruta.autobuses || this.ruta.autobuses.length==0){
      document.getElementsByName("buses")[0].classList.add("is-invalid")
      validacionCorrecta=false
    }
    else if(this.ruta.autobuses.length>2){
      Swal.fire(
        '¡Error!',
        'Las rutas deben tener como máximo 2 autobuses asignados',
        'error')
        validacionCorrecta=false
    }
    else{
      document.getElementsByName("buses")[0].classList.remove("is-invalid")
    }
    if(this.ruta.horaLlegada<this.ruta.horaSalida){
      Swal.fire(
        '¡Error!',
        'La hora de salida no puede ser mayor a la hora de llegada.',
        'error')
        validacionCorrecta=false
    }
    return validacionCorrecta
  }
}
