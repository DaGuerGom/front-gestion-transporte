import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { AsignacionCompletaService } from '../services/asignacion-completa.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-mis-rutas',
  templateUrl: './mis-rutas.component.html',
  styleUrls: ['./mis-rutas.component.css']
})
export class MisRutasComponent extends MenuComponent implements OnInit {
  asignaciones:any[]=[]
  constructor(private uService:UsuarioService,private route:Router,private asigService:AsignacionCompletaService, private auth:AuthService){
    super(uService,route,auth)}

    override async ngOnInit(): Promise<void> {
      super.ngOnInit().then(resp=>{
        this.asigService.obtenerAsignacionesDeUsuario(this.usuarioActivo.username).subscribe(resp=>{this.asignaciones=resp
        })
      })
    }
}
