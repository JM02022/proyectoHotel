import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { HabitacionPromocion } from 'src/app/ts/backEnd';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  listaPromociones:HabitacionPromocion[] = [];
  constructor(private servicio:ClienteService ) { 
    this.listaPromociones = servicio.getHabitacionesPromo();
  }
  
  ngOnInit(): void {
  }

}
