import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autobus } from 'src/app/interfaces/autobus';
import { Parada } from 'src/app/interfaces/parada';
import { Ruta, RutaSubmit } from 'src/app/interfaces/ruta';
import { Usuario } from 'src/app/interfaces/usuario';
import { AsignacionBusService } from 'src/app/services/asignacion-bus.service';
import { AutobusService } from 'src/app/services/autobus.service';
import { ParadaService } from 'src/app/services/parada.service';
import { RutaService } from 'src/app/services/ruta.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-ruta',
  templateUrl: './nueva-ruta.component.html',
  styleUrls: ['./nueva-ruta.component.css']
})
export class NuevaRutaComponent implements OnInit{
  nombre!:string;
  horaSalida!:string;
  horaLlegada!:string;
  autobusesLibres!:Autobus[]
  paradas!:Parada[]
  conductores!:Usuario[]
  idParadas!:number[]
  idBuses!:number[]
  usernameConductores!:string[]
  constructor(private router:Router, private rService:RutaService, private pService:ParadaService,private aService:AutobusService, private userService:UsuarioService,
    private asignacionService:AsignacionBusService){}

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
    this.userService.obtenerConductores().subscribe(resp=>{
      this.conductores=resp
    })
  }

  crearRuta():void{
    if(this.validacionCorrecta()){
      Swal.fire({
        title: '¿Seguro que quieres crear la ruta?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
      }).then(resp=>{
        if(resp.isConfirmed){
          let ruta:RutaSubmit={
            nombre:this.nombre,
            horaSalida:this.horaSalida,
            horaLlegada:this.horaLlegada,
            usuarios:this.usernameConductores,
            paradas:this.idParadas,
            autobuses:this.idBuses
          }
          this.rService.crearRuta(ruta).subscribe(resp=>{
            console.log(resp)
            for(let conductor of this.usernameConductores){
              for(let autobus of this.idBuses){
                let asignacion={
                  username:conductor,
                  ruta:resp.id,
                  autobus:autobus
                }
                this.asignacionService.asignar(asignacion).subscribe()
              }
            }
            Swal.fire(
              '¡Correcto!',
              'La ruta ha sido creada con éxito',
              'success')
              this.router.navigate(['/rutasAdmin'])
          })
        }
      })
    }
  }

  validacionCorrecta():boolean{
    let validacionCorrecta=true
    if(!this.nombre){
      document.getElementsByName("nombre")[0].classList.add("is-invalid")
      validacionCorrecta=false;
    }
    else{
      document.getElementsByName("nombre")[0].classList.remove("is-invalid")
    }
    if(!this.usernameConductores){
      document.getElementsByName("conductores")[0].classList.add("is-invalid")
      validacionCorrecta=false;
    }
    else{
      document.getElementsByName("conductores")[0].classList.remove("is-invalid")
    }
    if(!this.horaSalida){
      document.getElementsByName("horaSalida")[0].classList.add("is-invalid")
      validacionCorrecta=false;
    }
    else{
      document.getElementsByName("horaSalida")[0].classList.remove("is-invalid")
    }
    if(!this.horaLlegada){
      document.getElementsByName("horaLlegada")[0].classList.add("is-invalid")
      validacionCorrecta=false;
    }
    else{
      document.getElementsByName("horaLlegada")[0].classList.remove("is-invalid")
    }
    if(!this.idParadas){
      document.getElementsByName("paradas")[0].classList.add("is-invalid")
      validacionCorrecta=false
    }
    else if(this.idParadas.length<2){
      Swal.fire(
        '¡Error!',
        'Debe introducir al menos dos paradas',
        'error')
      validacionCorrecta=false
    }
    else{
      document.getElementsByName("paradas")[0].classList.remove("is-invalid")
    }
    if(!this.idBuses || this.idBuses.length==0){
      document.getElementsByName("buses")[0].classList.add("is-invalid")
      validacionCorrecta=false
    }
    else if(this.idBuses.length>2){
      Swal.fire(
        '¡Error!',
        'Las rutas deben tener como máximo 2 autobuses asignados',
        'error')
        validacionCorrecta=false
    }
    else{
      document.getElementsByName("buses")[0].classList.remove("is-invalid")
    }
    if(this.horaLlegada<this.horaSalida){
      Swal.fire(
        '¡Error!',
        'La hora de salida no puede ser mayor a la hora de llegada.',
        'error')
        validacionCorrecta=false
    }
    return validacionCorrecta
  }
} 
