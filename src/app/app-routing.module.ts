import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { MostrarhabitacionesComponent } from './componentsHabitaciones/mostrarhabitaciones/mostrarhabitaciones.component';
import { LoginComponent } from './Empleado/login/login.component';
import { NavEmpleadoComponent } from './Empleado/nav-empleado/nav-empleado.component';
import { RegistrarHabitacionesComponent } from './Empleado/registrar-habitaciones/registrar-habitaciones.component';
import { SolicitudesComponent } from './Empleado/solicitudes/solicitudes.component';
import { VistaReservasComponent } from './Empleado/vista-reservas/vista-reservas.component';

const routes: Routes = [
  {
    path: '',redirectTo: 'home',pathMatch: 'full'
  },
  {
    path: 'home',
    component: ReservaComponent
  },
  {
    path: 'habitaciones',
    component: MostrarhabitacionesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'navEmpleado',
    component: NavEmpleadoComponent
  },
  {
    path: 'registrarHabitaciones',
    component: RegistrarHabitacionesComponent
  },
  {
    path: 'solicitudes',
    component: SolicitudesComponent
  },
  {
    path: 'vistaReserva',
    component: VistaReservasComponent
  }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
