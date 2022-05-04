import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Reserva } from 'src/app/ts/backEnd';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  public Solicitudreservas:Reserva[] = [];
  constructor(private service:ClienteService) { 
    this.Solicitudreservas = service.getReservas();
  }

  ngOnInit(): void {
  }
  confirmar(i: number){
    this.service.confirmaReserva(i);
  }
  eliminar(i:number){
    this.service.eliminarReserva(i);
  }
}
