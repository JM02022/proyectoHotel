import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Habitacion, Reserva } from 'src/app/ts/backEnd';

@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.css']
})
export class ModalRegistroComponent implements OnInit {
  //habitacion prommo--- promociones... input
  @Input() tipoHabita:string = "";
 
  ngOnInit(): void {
    
  }
  tipoHabitaciones: Habitacion[] = []; 
  private contador:number = 2;
  constructor(private servicio:ClienteService ){
    this.tipoHabitaciones = servicio.getTipoHabitaciones();
    console.log(this.tipoHabita);
  }

  reserva = new FormGroup({
    nombre: new FormControl('',Validators.required),
    apellidos: new FormControl('',Validators.required),
    correo: new FormControl('',Validators.required),
    numeroCel: new FormControl('',Validators.required),
    fechaIngreso: new FormControl('',Validators.required),
    fechaSalida: new FormControl('',Validators.required),
    cantidadPersonas: new FormControl('',Validators.required),
    tipoHabitacion: new FormControl(this.tipoHabita,Validators.required)
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
      Estado: "Sin confirmar",
      pagado: "NO"
    }
    console.log(this.tipoHabita + "holaaaa")
    this.servicio.agregarReserva(Solicitud);
    this.contador++;
  }
}
