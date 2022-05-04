import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Habitacion, Reserva } from 'src/app/ts/backEnd';

@Component({
  selector: 'app-mostrarhabitaciones',
  templateUrl: './mostrarhabitaciones.component.html',
  styleUrls: ['./mostrarhabitaciones.component.css']
})
export class MostrarhabitacionesComponent implements OnInit {
  public habitaciones:Habitacion[] = [];
  constructor(private service:ClienteService) {
    this.habitaciones = service.getTipoHabitaciones();
   }
   contador:number = 1;
  ngOnInit(): void {
  }
  reserva = new FormGroup({
    nombre: new FormControl('',Validators.required),
    apellidos: new FormControl('',Validators.required),
    correo: new FormControl('',Validators.required),
    numeroCel: new FormControl('',Validators.required),
    fechaIngreso: new FormControl('',Validators.required),
    fechaSalida: new FormControl('',Validators.required),
    cantidadPersonas: new FormControl('',Validators.required),
    tipoHabitacion: new FormControl('',Validators.required)
  })

  solicitarReserva(form: FormGroup):void{
    var Solicitud: Reserva = {
      codR: this.contador,
      nombreCliente: this.reserva.value.nombre,
      apellidosCliente: this.reserva.value.apellidos, 
      correoCliente: this.reserva.value.correo,
      numeroCelularCliente: this.reserva.value.numeroCel,
      fechaIngreso: this.reserva.value.fechaIngreso,
      fechaSalida: this.reserva.value.fechaSalida,
      cantidadPersonas: this.reserva.value.cantidadPersonas,
      tipoHabitacion: this.reserva.value.tipoHabitacion, 
      Estado:"Sin confirmar",
      pagado: "NO"

    }
    this.service.agregarReserva(Solicitud);
    this.contador++;
  }
  
}
