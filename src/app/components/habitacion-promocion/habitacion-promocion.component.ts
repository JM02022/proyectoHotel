import { Component, Input, OnInit } from '@angular/core';
import { Habitacion, HabitacionPromocion } from 'src/app/ts/backEnd';

@Component({
  selector: 'app-habitacion-promocion',
  templateUrl: './habitacion-promocion.component.html',
  styleUrls: ['./habitacion-promocion.component.css']
})
export class HabitacionPromocionComponent implements OnInit {
  Habitacion: Habitacion = {
    codH:'',
    caracteristicas: '',
    tipoHabitacionH: '',
    nroHabitacion: 0,
    precioHabitacion: 0,
    pisoHabitacion:0,
    capacidad: 0
  }
  @Input() HabitacionPromo: HabitacionPromocion = {
    codHP: '',
    Descuento: 0,
    codHabitacion: this.Habitacion
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}
