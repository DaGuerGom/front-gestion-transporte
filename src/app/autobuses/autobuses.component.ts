import { Component, OnInit } from '@angular/core';
import { Autobus } from '../interfaces/autobus';
import { AutobusService } from '../services/autobus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autobuses',
  templateUrl: './autobuses.component.html',
  styleUrls: ['./autobuses.component.css']
})
export class AutobusesComponent implements OnInit{
  
  constructor(private service:AutobusService,private router:Router){}

  autobuses!:Autobus[]

  ngOnInit(): void {
    this.service.obtenerAutobuses().subscribe(
      resp=>{
        this.autobuses=resp
      }
    )
  }

  editarAutobus(autobus:Autobus){
    this.router.navigate(["/editarAutobus",autobus.id])
  }
}
