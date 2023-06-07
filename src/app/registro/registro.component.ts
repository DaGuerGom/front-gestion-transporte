import { Component } from '@angular/core';
import { UsuarioRegistro } from '../interfaces/usuario';
import { AuthService } from '../services/auth.service';
import { UsuarioService } from '../services/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  username:string=""
  password:string="";
  password2:string="";
  email:string="";
  tipo:string="al";

  constructor(private service:UsuarioService,private router:Router){}

  registrar(){
    if (this.validacionCorrecta()){
    var usuario:UsuarioRegistro={
      username:this.username,
    password:this.password,
    email:this.email,
    tipo:this.tipo,
    admitido:"P",
    rutas:[],
    }
    this.service.registrarUsuario(usuario).subscribe(
      ((resp)=>{Swal.fire(
        '¡Conseguido!',
        'El usuario ha sido registrado con éxito',
        'success')
        this.router.navigate([""])
      }
      )
    )
  }
  }

  validacionCorrecta():boolean{
    let validacionCorrecta=true;
    const textoRegex: RegExp = /^(?!.*\s).*\S.*$/;
    const passwordRegex: RegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)(?!.*\s).{8,16}$/;
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!textoRegex.test(this.username)){
      document.getElementsByName("username")[0].classList.add("is-invalid")
      validacionCorrecta=false
    }
    else{
      document.getElementsByName("username")[0].classList.remove("is-invalid")
    }
    if (!emailRegex.test(this.email)){
      document.getElementsByName("email")[0].classList.add("is-invalid")
      validacionCorrecta=false
    }
    else{
      document.getElementsByName("email")[0].classList.remove("is-invalid")
    }
    if (!passwordRegex.test(this.password)){
      document.getElementsByName("contrasenna")[0].classList.add("is-invalid")
      validacionCorrecta=false
    }
    else{
      document.getElementsByName("contrasenna")[0].classList.remove("is-invalid")
    }
    if (!passwordRegex.test(this.password2) || this.password2!=this.password) {
      document.getElementsByName("contrasenna2")[0].classList.add("is-invalid")
      validacionCorrecta=false
    }
    else{
      document.getElementsByName("contrasenna2")[0].classList.remove("is-invalid")
    }
    return validacionCorrecta;
  }
}
