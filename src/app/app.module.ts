import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselHabitacionesComponent } from './components/carrusel-habitaciones/carrusel-habitaciones.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { HabitacionesComponent } from './componentsHabitaciones/habitaciones/habitaciones.component';
import { MostrarhabitacionesComponent } from './componentsHabitaciones/mostrarhabitaciones/mostrarhabitaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalRegistroComponent } from './components/modal-registro/modal-registro.component';
import { HabitacionPromocionComponent } from './components/habitacion-promocion/habitacion-promocion.component';
import { LoginComponent } from './Empleado/login/login.component';
import { NavEmpleadoComponent } from './Empleado/nav-empleado/nav-empleado.component';
import { SolicitudesComponent } from './Empleado/solicitudes/solicitudes.component';
import { RegistrarHabitacionesComponent } from './Empleado/registrar-habitaciones/registrar-habitaciones.component';
import { VistaReservasComponent } from './Empleado/vista-reservas/vista-reservas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ReservaComponent,
    FooterComponent,
    CarruselHabitacionesComponent,
    PromocionesComponent,
    HabitacionesComponent,
    MostrarhabitacionesComponent,
    ModalRegistroComponent,
    HabitacionPromocionComponent,
    LoginComponent,
    NavEmpleadoComponent,
    SolicitudesComponent,
    RegistrarHabitacionesComponent,
    VistaReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  