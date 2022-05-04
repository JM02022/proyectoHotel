import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Habitacion, Reserva } from 'src/app/ts/backEnd';

@Component({
  selector: 'app-vista-reservas',
  templateUrl: './vista-reservas.component.html',
  styleUrls: ['./vista-reservas.component.css']
})
export class VistaReservasComponent implements OnInit {
  public tipoHabitacion:Habitacion[] = [];
  public Solicitudreservas:Reserva[] = [];
  constructor(private service:ClienteService) { 
    this.Solicitudreservas = service.getReservas();
    this.tipoHabitacion = service.getTipoHabitaciones();
  }
  ngOnInit(): void {
  }
  modificarPago(i:number){
    this.service.modificarPagoReserva(i);
  }
  eliminar(i:number){
    this.service.eliminarReserva(i);
  }

  contador:number = 2;
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
      Estado: "Sin confirmar",
      pagado: "NO"

    }
    this.service.agregarReserva(Solicitud);
    this.contador++;
  }
}
