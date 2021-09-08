import { Notificacion } from 'src/app/core/interfaces/notificacion';

const mockedNotificaciones: Notificacion[] =
    [
        {
            clienteId: '423424234234234',
            entityId: 'casos',
            fecha: '12/12/2020',
            read: false,
            titulo: 'Notificacion test',
            type: 'Casos'
        }
    ];

const emptyNotificacion: Notificacion = {
    clienteId: '',
    entityId: 'casos',
    fecha: '',
    read: false,
    titulo: '',
    type: 'Casos'
};

export {
    mockedNotificaciones,
    emptyNotificacion
};
