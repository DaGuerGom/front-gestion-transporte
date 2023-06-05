import { Component, OnInit } from '@angular/core';
import { Autobus } from '../interfaces/autobus';
import { AutobusService } from '../services/autobus.service';

@Component({
  selector: 'app-autobuses',
  templateUrl: './autobuses.component.html',
  styleUrls: ['./autobuses.component.css']
})
export class AutobusesComponent implements OnInit{
  
  constructor(private service:AutobusService){}

  autobuses!:Autobus[]

  ngOnInit(): void {
    this.service.obtenerAutobuses().subscribe(
      resp=>{
        this.autobuses=resp
      }
    )
  }

  
}
