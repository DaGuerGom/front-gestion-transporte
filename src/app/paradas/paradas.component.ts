import { Component, OnInit } from '@angular/core';
import { ParadaService } from '../services/parada.service';
import { Parada } from '../interfaces/parada';

@Component({
  selector: 'app-paradas',
  templateUrl: './paradas.component.html',
  styleUrls: ['./paradas.component.css']
})
export class ParadasComponent implements OnInit{
  constructor(private service:ParadaService){}

  paradas:Parada[]=[]

  ngOnInit(): void {
    this.service.obtenerParadas().subscribe(
      resp=>{
        this.paradas=resp
      }
    )
  }

}
