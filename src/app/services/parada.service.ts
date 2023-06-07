import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parada, ParadaSubmit } from '../interfaces/parada';

@Injectable({
  providedIn: 'root'
})
export class ParadaService {

  url:string="http://localhost:8080/api/v1/paradas"

  constructor(private http:HttpClient) { }

  obtenerParadas():Observable<Parada[]>{
    return this.http.get<Parada[]>(this.url)
  }

  obtenerParadaPorId(id:number):Observable<Parada>{
    let url=this.url+"/"+id
    return this.http.get<Parada>(url)
  }
  obtenerParadasDeRuta(idRuta:number):Observable<Parada[]>{
    return this.http.get<Parada[]>("http://localhost:8080/api/v1/paradasDeRuta/"+idRuta)
  }
  crearParada(parada:ParadaSubmit):Observable<Parada>{
    return this.http.post<Parada>(this.url,parada)
  }

  actualizarParada(parada:Parada):Observable<Parada>{
    let url=this.url+"/"+parada.id
    return this.http.put<Parada>(url,parada)
  }

  borrarParada(id:number):Observable<any>{
    let url=this.url+"/"+id
    return this.http.delete(url)
  }
}
