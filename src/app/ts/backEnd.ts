//cod,fecha,cantidad personas,tipohabitacion, cliente
// cliente -> nombre, apellido, correo, celular, mensaje?
export interface Habitacion{
    codH:string,
    caracteristicas: string,
    tipoHabitacionH: string,
    nroHabitacion: number,
    precioHabitacion: number,
    pisoHabitacion:number,
    capacidad: number,
    estado?:string
}

export interface Reserva{
    codR: number,
    nombreCliente: string,
    apellidosCliente: string, 
    correoCliente:string,
    numeroCelularCliente: number,
    
    fechaIngreso: string,
    fechaSalida: string,
    cantidadPersonas: number,
    tipoHabitacion: string, //Habitacion
    Estado:string,
    pagado:string
}
export interface RegistroHuespedes{
    codRG:string,
    fechaInicioRG: string,
    fechaFinRG:string,
    codR: Reserva,
}
export interface HabitacionPromocion{
    codHP:string,
    Descuento: number,
    codHabitacion: Habitacion
}

//LADO EMPLEADO
export interface Empleado{
    codE:string,
    nombre: string,
    apellidoP:string,
    apellidoM:string,
    contrasenia: string,
    correo:string,
    direccion:string,
    telefono:number
}