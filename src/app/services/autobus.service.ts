import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autobus } from '../interfaces/autobus';

@Injectable({
  providedIn: 'root'
})
export class AutobusService {

  constructor(private http:HttpClient) { }

  obtenerAutobuses():Observable<Autobus[]>{
    const url="http://localhost:8080/api/v1/bus"
    return this.http.get<Autobus[]>(url)
  }
}
