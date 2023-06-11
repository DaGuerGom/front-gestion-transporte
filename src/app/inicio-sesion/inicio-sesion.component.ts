import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsuarioLogin } from '../interfaces/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  username:string="";
  password:string="";

  constructor(private authService: AuthService, private router:Router){}

  ngOnInit(): void {
    this.authService.cerrarSesion();
  }

  iniciarSesion():void{
    let usuario:UsuarioLogin={
      username:this.username,
      password:this.password
    }
    this.authService.iniciarSesion(usuario).subscribe(
      (resp)=>{
        sessionStorage.setItem('usuarioActivo',resp.body.username)
        let ruta="";
        if (resp.body.admitido=="S") {
          switch(resp.body.tipo){
            case "al":
              ruta="/home-alumno";
              break;
            case "c":
              ruta="/home-conductor";
              break;
            default:
              ruta="/home-admin";
          }
        }
        else if(resp.body.admitido=="P"){
          ruta="/espera"
        }
        else{
          ruta="/rechazado"
        }
        this.router.navigate([ruta]);
      },
      (error)=>{
        Swal.fire(
          '¡Error!',
          'Las credenciales que has introducido no son correctas.',
          'error'
        )
      }
    )
  }

}
