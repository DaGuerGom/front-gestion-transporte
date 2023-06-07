import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Autobus } from 'src/app/interfaces/autobus';
import { Parada } from 'src/app/interfaces/parada';
import { Ruta } from 'src/app/interfaces/ruta';
import { MenuComponent } from 'src/app/menu/menu.component';
import { AsignacionBusService } from 'src/app/services/asignacion-bus.service';
import { AsignacionParadaService } from 'src/app/services/asignacion-parada.service';
import { AuthService } from 'src/app/services/auth.service';
import { AutobusService } from 'src/app/services/autobus.service';
import { ParadaService } from 'src/app/services/parada.service';
import { RutaService } from 'src/app/services/ruta.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apuntar-ruta',
  templateUrl: './apuntar-ruta.component.html',
  styleUrls: ['./apuntar-ruta.component.css']
})
export class ApuntarRutaComponent extends MenuComponent implements OnInit {

  ruta!:Ruta
  autobuses!: Observable<Autobus[]>
  idAutobus:number=0
  paradas!:Observable<Parada[]>
  idParada:number=0

  constructor(private rService:RutaService,private aRoute:ActivatedRoute, private aService:AutobusService,private pService:ParadaService, 
    private uraService:AsignacionBusService,private urpService:AsignacionParadaService, private auService:AuthService,private uService:UsuarioService,private route:Router){
      super(uService, route,auService)}

  override async ngOnInit(): Promise<void> {
    super.ngOnInit();
    this.rService.obtenerRutaPorId(this.aRoute.snapshot.params["id"]).subscribe(resp=>{
      this.ruta=resp
    })
    this.autobuses=this.aService.obtenerAutobusesLibresDeRuta(this.aRoute.snapshot.params["id"])
    this.autobuses.subscribe(resp=>{
      if(resp.length==0){
        Swal.fire(
          "¡Lo sentimos!",
          "No quedan plazas libres para la siguiente ruta: "+this.ruta.nombre,
          "error"
        )
        this.router.navigate(["/rutas"])
      }
    })
    this.paradas=this.pService.obtenerParadasDeRuta(this.aRoute.snapshot.params["id"])
  }

  asignarRuta():void{
    if(this.validacionCorrecta()){
      Swal.fire({
        title: '¿Seguro que quieres apuntarte a la ruta?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
      }).then(resp=>{
        if(resp.isConfirmed){
          let asignacionBus={username:this.usuarioActivo.username,ruta:this.aRoute.snapshot.params["id"],autobus:this.idAutobus}
          this.uraService.asignar(asignacionBus).subscribe()
          let asignacionParada={username:this.usuarioActivo.username,ruta:this.aRoute.snapshot.params["id"],parada:this.idParada}
          this.urpService.asignar(asignacionParada).subscribe(resp=>{
            Swal.fire(
              '¡Correcto!',
              'Te has apuntado a la ruta con éxito',
              'success')
              this.router.navigate(['/rutas'])
          })
        }
        
      })
    }
  }

  validacionCorrecta():boolean{
    let validacionCorrecta=true
    if(this.idAutobus==0){
      document.getElementsByName("autobus")[0].classList.add("is-invalid")
      validacionCorrecta=false
    }
    else{
      document.getElementsByName("autobus")[0].classList.remove("is-invalid")
    }
    if(this.idParada==0){
      document.getElementsByName("parada")[0].classList.add("is-invalid")
      validacionCorrecta=false
    }
    else{
      document.getElementsByName("parada")[0].classList.remove("is-invalid")
    }
    return validacionCorrecta
  }
}
