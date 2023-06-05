import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parada } from 'src/app/interfaces/parada';
import { ParadaService } from 'src/app/services/parada.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-parada',
  templateUrl: './actualizar-parada.component.html',
  styleUrls: ['./actualizar-parada.component.css']
})
export class ActualizarParadaComponent implements OnInit{
  constructor(private service:ParadaService, private ruta:ActivatedRoute, private router:Router){}

  parada!:Parada
  id:number=this.ruta.snapshot.params['id'];

  ngOnInit(): void {
    this.service.obtenerParadaPorId(this.id).subscribe(
      resp=>{
        this.parada=resp
      }
    )
  }

  cancelar():void{
    this.router.navigate(["/paradasAdmin"])
  }

  editar():void{
    Swal.fire({
      title: '¿Seguro que quieres editar la parada?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then(resp=>{
      if (resp.isConfirmed) {
        this.service.actualizarParada(this.parada).subscribe(
          resp=>{
            {Swal.fire(
              '¡Correcto!',
              'La parada se ha actualizado con éxito',
              'success')
              this.router.navigate(["/paradasAdmin"])
            }
          }
        )
      }
    })
  }
}
