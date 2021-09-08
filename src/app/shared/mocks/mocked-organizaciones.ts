import { Licencia } from 'src/app/core/interfaces/licencia';
import { Organizacion } from 'src/app/core/interfaces/organizacion';

const licencia: Licencia = {
    activo: true,
    id: 'Free plan',
    organizacionId: '1234566789',
    planes: [
        {
            referenciaId: 'Free plan',
            cantidadMeses: 1,
            fechaDesde: '12/12/2020',
            fechaHasta: '17/12/2020',
            nombre: 'gratis'
        }
    ]
};

const mockedOrganizaciones: Organizacion[] = [
    {
        licencia,
        availableUsers: 1,
        consumedStorage: 0,
        id: 'ocRez6cnzEDbhiEgyUO0',
        nombre: 'Test Estudio',
        domicilio: 'Alvear 2996',
        nombreApellidoResponsable: 'Pablo Gil',
        emailContacto: 'infoutsimplex@gmail.com',
        telefonoContacto: '3413192897',
        cuit: '20-33868923-4',
        normativas: [],
        formularios: [],
        remainingStorage: 1073741824,
        extraStorage: 0,
        dependencias: [
            {
                auto: false,
                direccion: 'Rioja 123',
                id: 'JIlG046S9jDBm7ijNS62',
                nombre: 'Test 1',
                organismo: 'Test 2'
            }
        ],
        privados: [],
        usuarios: [{
            apellido: 'Test',
            email: 'infoutsimplex@gmail.com',
            id: 'zSErfxBeX3U87arQ9roRdZYYCxB2',
            isActive: true,
            isAdmin: false,
            hasPaid: true,
            nombre: 'Pablo',
            organizacionId: 'NSGA8XviYhWtEPadxmXZ',
            colorTheme: 'light',
            licence: 'gratis',
            allowNotifications: true,
            tokens: null,
            notificaciones: []
        },
        {
            apellido: 'Test',
            email: 'infoutsimplex@gmail.com',
            id: 'zSErfxBeX3U87arQ9roRdZYYCxB2',
            isActive: true,
            isAdmin: false,
            hasPaid: true,
            nombre: 'Pablo',
            organizacionId: 'NSGA8XviYhWtEPadxmXZ',
            colorTheme: 'light',
            licence: 'gratis',
            allowNotifications: true,
            tokens: null,
            notificaciones: []
        }]
    }
];

const emptyOrganizacion: Organizacion = {
    availableUsers: 1,
    licencia,
    id: '0',
    nombre: '',
    domicilio: '',
    nombreApellidoResponsable: '',
    emailContacto: '',
    telefonoContacto: '',
    cuit: '',
    extraStorage: 0,
    remainingStorage: 0,
    consumedStorage: 0,
    normativas: [],
    formularios: [],
    privados: [],
    usuarios: [],
    dependencias: []
};

export {
    mockedOrganizaciones,
    emptyOrganizacion
};
