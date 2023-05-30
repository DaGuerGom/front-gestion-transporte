import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Usuario } from '../interfaces/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitudes-usuarios',
  templateUrl: './solicitudes-usuarios.component.html',
  styleUrls: ['./solicitudes-usuarios.component.css']
})
export class SolicitudesUsuariosComponent extends MenuComponent {
  listaUsuarios!:Usuario[]

  override async ngOnInit(): Promise<void> {
    const resp = await this.userService.obtenerUsuarioActivo().toPromise();
      this.usuarioActivo = resp.body;
      switch (this.usuarioActivo.tipo) {
        case "al":
          this.rutaHome = "/home-alumno";
          break;
        case "c":
          this.rutaHome = "/home-conductor";
          break;
        default:
          this.rutaHome = "/home-admin";
      }
    this.userService.obtenerUsuariosPendientes().toPromise()
      .then(resp => {
        this.listaUsuarios=resp.body
        this.usuariosPendientes=resp.body.length
      })
  }

  getTipo(usuario:Usuario){
    return usuario.tipo=="al"?"Alumno":"Conductor"
  }
  
  aceptarUsuario(usuario:Usuario):void{
    Swal.fire({
      title: '¿Seguro que quieres admitir a '+usuario.username+"?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
    if (result.isConfirmed){
      usuario.admitido='S'
      this.userService.actualizarUsuario(usuario).subscribe(
        resp=>{
          Swal.fire({
            confirmButtonColor: "#ff6d43",
            title: 'Usuario añadido con éxito',
            icon: 'success'
          })
          this.ngOnInit()
        }
      )
    }
  })
  }

  rechazarUsuario(usuario:Usuario):void{

    Swal.fire({
      title: '¿Seguro que quieres denegar el acceso a '+usuario.username+"?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
    if (result.isConfirmed){
      usuario.admitido='N'
      this.userService.actualizarUsuario(usuario).subscribe(
        resp=>{
          Swal.fire({
            confirmButtonColor: "#ff6d43",
            title: 'Usuario rechazado con éxito',
            icon: 'success'
          })
          this.ngOnInit()
        }
      )
    }
  })
  }
}
