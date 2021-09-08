import { Usuario } from 'src/app/core/interfaces/usuario';

import { mockedCasos } from './mocked-casos';
import { mockedClientes } from './mocked-clientes';

// import * as moment from 'moment';
const mockedUsuarios: Usuario[] = [
    {
        apellido: 'Agnese',
        email: 'infoutsimplex@gmail.com',
        id: 'zSErfxBeX3U87arQ9roRdZYYCxB2',
        nombre: 'Daniel',
        organizacionId: 'ocRez6cnzEDbhiEgyUO0',
        isAdmin: true,
        isActive: true,
        hasPaid: true,
        colorTheme: 'light',
        licence: 'gratis',
        allowNotifications: true,
        tokens: ['123456'],
        notificaciones: [{
            titulo: 'Test title',
            type: `Caso`,
            read: false,
            fecha: '31/12/2020',
            entityId: mockedCasos[0].id,
            clienteId: mockedClientes[0].id
        }]
    },
    {
        apellido: 'Gil',
        email: 'infoutsimplex@gmail.com',
        id: 'zSErfxBeX3U87arQ9roRdZYYCxB2',
        nombre: 'Pablo',
        organizacionId: 'ocRez6cnzEDbhiEgyUO0',
        isAdmin: true,
        isActive: true,
        hasPaid: true,
        colorTheme: 'light',
        licence: 'gratis',
        allowNotifications: false,
        tokens: ['12345'],
        notificaciones: []
    },

    {
        apellido: 'Arrighi',
        email: 'dantearrighi@gmail.com',
        id: 'IqBkYEhXSteKwSbmCJaETZN2Z9Y2',
        nombre: 'Dante',
        organizacionId: 'yfWzOZcUhiuQiGkAZl2o',
        isAdmin: true,
        isActive: true,
        hasPaid: true,
        colorTheme: 'light',
        licence: 'gratis',
        allowNotifications: false,
        tokens: ['12345'],
        notificaciones: []
    }
];

const emptyUsuario: Usuario = {
    licence: 'gratis',
    apellido: '',
    email: '',
    id: '0',
    nombre: '',
    organizacionId: '',
    isAdmin: false,
    isActive: true,
    hasPaid: true,
    colorTheme: 'light',
    allowNotifications: true,
    tokens: null,
    notificaciones: []
};

export {
    mockedUsuarios,
    emptyUsuario
};
