import { Injectable } from '@angular/core';
import { Empleado, Habitacion, HabitacionPromocion, RegistroHuespedes, Reserva } from '../ts/backEnd';
import { empleados, habitacionesHotel, habitacionesPromocion, solicitudes } from '../ts/datosExportados';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private habitaciones:Habitacion[]  = habitacionesHotel;
  private habitacionesPromociones:HabitacionPromocion[] = habitacionesPromocion;
  private SolicitudesReservas:Reserva[] = solicitudes;
  private empleados:Empleado[] = empleados;
  private RegistroHuespedes:RegistroHuespedes[] = [];
  constructor() { }
  agregarReserva(NuevaReserva: Reserva) : void{
    this.SolicitudesReservas.push(NuevaReserva);
    console.table(this.SolicitudesReservas);
  }
  getTipoHabitaciones() : Habitacion[] {
    return this.habitaciones;
  }
  getHabitacionesPromo(): HabitacionPromocion[] {
    return this.habitacionesPromociones;
  }
  getEmpleados(): Empleado[] {
    return this.empleados;
  }
  getReservas(): Reserva[]{
    return this.SolicitudesReservas;
  }
  confirmaReserva(i:number){
    if(this.SolicitudesReservas[i].Estado != "Confirmado"){
      this.SolicitudesReservas[i].Estado = "Confirmado";
    }
    console.table(this.SolicitudesReservas)
  }
  eliminarReserva(i:number){
    this.SolicitudesReservas.splice(i,1);
  }
  modificarPagoReserva(i:number){
    if(this.SolicitudesReservas[i].pagado != "SI"){
      this.SolicitudesReservas[i].pagado = "SI";
    }
    console.table(this.SolicitudesReservas);
  }
  agregarHabitacion(NuevaHabitacion:Habitacion){
    this.habitaciones.push(NuevaHabitacion);
    console.table(this.habitaciones);
  }
  eliminarHabitacion(i:number){
    this.habitaciones.splice(i,1);
    console.log("eliminado");
  }
}