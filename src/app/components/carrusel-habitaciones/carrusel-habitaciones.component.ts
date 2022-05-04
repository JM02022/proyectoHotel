import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Habitacion } from 'src/app/ts/backEnd';

@Component({
  selector: 'app-carrusel-habitaciones',
  templateUrl: './carrusel-habitaciones.component.html',
  styleUrls: ['./carrusel-habitaciones.component.css']
})
export class CarruselHabitacionesComponent implements OnInit {
  habitacionesTop:Habitacion[] = [];
  constructor(service: ClienteService) {
    this.habitacionesTop = service.getTipoHabitaciones();
  }
  
  ngOnInit(): void {

  }
}
