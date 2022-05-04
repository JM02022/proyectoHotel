import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Habitacion, Reserva } from 'src/app/ts/backEnd';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  //solictar nueva reserva
  tipoHabitacion: Habitacion[] = []; 
  private contador:number = 2;
  constructor(private servicio:ClienteService ){
    this.tipoHabitacion = servicio.getTipoHabitaciones();
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

  ngOnInit(): void {
  }
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
      Estado: "Sin confirmar",
      pagado: "NO"

    }
    this.servicio.agregarReserva(Solicitud);
    this.contador++;
  }
}
