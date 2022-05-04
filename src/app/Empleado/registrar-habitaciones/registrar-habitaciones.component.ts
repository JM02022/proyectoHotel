import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Habitacion } from 'src/app/ts/backEnd';

@Component({
  selector: 'app-registrar-habitaciones',
  templateUrl: './registrar-habitaciones.component.html',
  styleUrls: ['./registrar-habitaciones.component.css']
})
export class RegistrarHabitacionesComponent implements OnInit {
  habitaciones:Habitacion[] = [];
  constructor(private service:ClienteService) {
    this.habitaciones = service.getTipoHabitaciones();
   }

   contador:number = 2;
   registrarhabitacion = new FormGroup({
    codH: new FormControl('',Validators.required),
    caracteristicas: new FormControl('',Validators.required),
    tipoHabitacionH: new FormControl('',Validators.required),
    nroHabitacion: new FormControl('',Validators.required),
    precioHabitacion: new FormControl('',Validators.required),
    pisoHabitacion: new FormControl('',Validators.required),
    capacidad: new FormControl('',Validators.required)

  })


  NuevaHabitacion(form: FormGroup):void{
    var habitacion: Habitacion= {
      codH: this.registrarhabitacion.value.codH,
      caracteristicas: this.registrarhabitacion.value.caracteristicas,
      tipoHabitacionH: this.registrarhabitacion.value.tipoHabitacionH,
      nroHabitacion: this.registrarhabitacion.value.nroHabitacion,
      precioHabitacion: this.registrarhabitacion.value.precioHabitacion,
      pisoHabitacion:this.registrarhabitacion.value.pisoHabitacion,
      capacidad: this.registrarhabitacion.value.capacidad

    }
    this.service.agregarHabitacion(habitacion);
    this.contador++;
  }
  ngOnInit(): void {
  }
  eliminar(i:number){
    this.service.eliminarHabitacion(i);
  }
}
