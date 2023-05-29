import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuarioActivo!:Usuario
  usuariosPendientes:number=0;

  constructor(protected userService:UsuarioService){}
  
  ngOnInit(): void {
    
  }

}
