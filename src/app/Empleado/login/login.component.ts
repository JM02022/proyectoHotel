import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Empleado } from 'src/app/ts/backEnd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  empleados:Empleado[] = [];
  logEmpleado= new FormGroup({
    usuario: new FormControl('',Validators.required),
    contrasenia: new FormControl('',Validators.required)
  })
  constructor(service:ClienteService,private router: Router) {
    this.empleados = service.getEmpleados();
    console.table(this.empleados)
   }

  ngOnInit(): void {
  }
  login(form: FormGroup):void{
    if(this.buscar(this.logEmpleado.value.usuario,this.logEmpleado.value.contrasenia) > -1){
      this.router.navigate(['navEmpleado']);
      console.log("emtrar")
    }
    else{
      console.log("datos incorrectos")
    }
    console.log(form)
    //https://www.flaticon.com/premium-icon/students_2995620?related_id=2995620&origin=search
  }
  buscar(user:string,password:string):number{
    for(let i = 0; i < this.empleados.length; i++){
      if(this.empleados[i].codE == user && this.empleados[i].contrasenia == password){
        console.log("encontrado!!")
        return i;
      }
    }
    return -1;
  }
}
