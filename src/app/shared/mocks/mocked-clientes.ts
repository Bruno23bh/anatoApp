import { Cliente } from 'src/app/clientes/interfaces/cliente';

const mockedClientes: Cliente[] = [
    {
        id: '23345416919',
        organizacionId: 'ocRez6cnzEDbhiEgyUO0',
        nombre: 'Pablo',
        apellido: 'GIL',
        email: 'infoutsimplex@gmail.com',
        documentoTipo: '',
        documentoNro: 0,
        fechaNacimiento: '',
        claveFiscal: '',
        claveSeguridadSocial: '',
        cuil: '',
        telefono: '3413192897',
        sexo: '',
        estadoCivil: '',
        nacionalidad: '',
        direccion: '',
        piso: '',
        departamento: '',
        provincia: '',
        localidad: '',
        codigoPostal: '',
    }
];

const emptyCliente: Cliente = {
    id: '0',
    organizacionId: '',
    nombre: '',
    apellido: '',
    email: '',
    documentoTipo: '',
    documentoNro: 0,
    fechaNacimiento: '',
    claveFiscal: '',
    claveSeguridadSocial: '',
    cuil: '',
    telefono: '',
    sexo: '',
    estadoCivil: '',
    nacionalidad: '',
    direccion: '',
    piso: '',
    departamento: '',
    provincia: '',
    localidad: '',
    codigoPostal: '',
};

export {
    mockedClientes,
    emptyCliente
};
