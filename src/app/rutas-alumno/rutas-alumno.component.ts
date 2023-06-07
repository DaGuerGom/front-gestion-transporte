import { Component, OnInit } from '@angular/core';
import { AsignacionBusService } from '../services/asignacion-bus.service';

@Component({
  selector: 'app-rutas-alumno',
  templateUrl: './rutas-alumno.component.html',
  styleUrls: ['./rutas-alumno.component.css']
})
export class RutasAlumnoComponent implements OnInit{
  asignacionDisponible:any[]=[]

  constructor(private service:AsignacionBusService){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
