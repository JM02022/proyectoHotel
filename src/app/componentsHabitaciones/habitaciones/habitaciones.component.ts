import { Component, Input, OnInit } from '@angular/core';
import { Habitacion } from 'src/app/ts/backEnd';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {
  @Input()Habitacion: Habitacion = {
    codH:'',
    caracteristicas: '',
    tipoHabitacionH: '',
    nroHabitacion: 0,
    precioHabitacion: 0,
    pisoHabitacion:0,
    capacidad: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

}
