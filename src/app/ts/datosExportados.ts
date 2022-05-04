import { Empleado, Habitacion, HabitacionPromocion, Reserva } from "./backEnd";

export let habitacionesHotel: Habitacion [] = [
    {
        codH: "H1",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Matrimonial",
        nroHabitacion: 1,
        precioHabitacion: 500,
        pisoHabitacion: 2,
        capacidad: 4
    },
    {
        codH: "H2",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Individual",
        nroHabitacion: 2,
        precioHabitacion: 200,
        pisoHabitacion: 5,
        capacidad: 2
    },
    {
        codH: "H3",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Doble",
        nroHabitacion: 1,
        precioHabitacion: 200,
        pisoHabitacion: 2,
        capacidad: 4
    },
    {
        codH: "H4",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Triple",
        nroHabitacion: 2,
        precioHabitacion: 500,
        pisoHabitacion: 5,
        capacidad: 2
    },
    {
        codH: "H5",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Doble",
        nroHabitacion: 1,
        precioHabitacion: 200,
        pisoHabitacion: 2,
        capacidad: 4
    },
    {
        codH: "H6",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Doble",
        nroHabitacion: 2,
        precioHabitacion: 200,
        pisoHabitacion: 5,
        capacidad: 2
    },
    {
        codH: "H7",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Doble",
        nroHabitacion: 2,
        precioHabitacion: 200,
        pisoHabitacion: 5,
        capacidad: 2
    },
    {
        codH: "H8",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Doble",
        nroHabitacion: 2,
        precioHabitacion: 200,
        pisoHabitacion: 5,
        capacidad: 2
    },
    {
        codH: "H9",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Doble",
        nroHabitacion: 2,
        precioHabitacion: 200,
        pisoHabitacion: 5,
        capacidad: 2
    },
    {
        codH: "H10",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Doble",
        nroHabitacion: 2,
        precioHabitacion: 200,
        pisoHabitacion: 5,
        capacidad: 2
    },
    {
        codH: "H11",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Doble",
        nroHabitacion: 2,
        precioHabitacion: 200,
        pisoHabitacion: 5,
        capacidad: 2
    },
    {
        codH: "H12",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Doble",
        nroHabitacion: 2,
        precioHabitacion: 200,
        pisoHabitacion: 5,
        capacidad: 2
    },
    {
        codH: "H13",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Doble",
        nroHabitacion: 2,
        precioHabitacion: 200,
        pisoHabitacion: 5,
        capacidad: 2
    },
    {
        codH: "H14",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Doble",
        nroHabitacion: 2,
        precioHabitacion: 200,
        pisoHabitacion: 5,
        capacidad: 2
    },
    {
        codH: "H15",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Doble",
        nroHabitacion: 2,
        precioHabitacion: 200,
        pisoHabitacion: 5,
        capacidad: 2
    },
    {
        codH: "H16",
        caracteristicas: "habitacion elegante",
        tipoHabitacionH: "Doble",
        nroHabitacion: 2,
        precioHabitacion: 200,
        pisoHabitacion: 5,
        capacidad: 2
    }
];
export let habitacionesPromocion: HabitacionPromocion [] = [
    {
        codHP:"P1",
        Descuento: 100,
        codHabitacion:  habitacionesHotel[0]
    },
    {
        codHP:"P2",
        Descuento: 200,
        codHabitacion:  habitacionesHotel[15]
    },
    {
        codHP:"P3",
        Descuento: 100,
        codHabitacion:  habitacionesHotel[1]
    },
    {
        codHP:"P4",
        Descuento: 100,
        codHabitacion:  habitacionesHotel[2]
    },
    {
        codHP:"P5",
        Descuento: 100,
        codHabitacion:  habitacionesHotel[3]
    },
    {
        codHP:"P6",
        Descuento: 100,
        codHabitacion:  habitacionesHotel[4]
    },
    {
        codHP:"P7",
        Descuento: 100,
        codHabitacion:  habitacionesHotel[5]
    },
    {
        codHP:"P8",
        Descuento: 100,
        codHabitacion:  habitacionesHotel[6]
    }
];
export let empleados:Empleado[] = [
    {
        codE: "E1",
        nombre: "Jose",
        apellidoP: "Vega",
        apellidoM: "Rosa",
        contrasenia: "123",
        correo: "123@gmail.com",
        direccion: "Av.sol",
        telefono: 987854712
    },
    {
        codE: "E2",
        nombre: "Ana",
        apellidoP: "Salazar",
        apellidoM: "Huaman",
        contrasenia: "321",
        correo: "321@gmail.com",
        direccion: "Av.Cultura",
        telefono: 976854712
    }

];
export let solicitudes:Reserva[] = [
    {
        codR:1,
        nombreCliente: "Jose",
        apellidosCliente: "Apellido1 Apellido2", 
        correoCliente: "Jose@gmail.com",
        numeroCelularCliente: 8712321316,
        fechaIngreso:"04-05-2022",
        fechaSalida: "06-05-2022",
        cantidadPersonas: 2,
        tipoHabitacion: "Matrimonial", //Habitacion
        Estado:"Sin confirmar",
        pagado: "NO"
    },
    {
        codR:2,
        nombreCliente: "Maria",
        apellidosCliente: "Apellido1 Apellido2", 
        correoCliente: "Maria@gmail.com",
        numeroCelularCliente: 8712321316,
        fechaIngreso:"04-05-2022",
        fechaSalida: "06-05-2022",
        cantidadPersonas: 1,
        tipoHabitacion: "Individual", //Habitacion
        Estado:"Sin confirmar",
        pagado: "NO"
    }
]