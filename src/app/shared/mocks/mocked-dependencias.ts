import { Dependencia } from 'functions/src/interfaces/dependencia';

const mockedDependencias: Dependencia[] =
    [
        {
            auto: false,
            direccion: 'Rioja 123',
            id: 'JIlG046S9jDBm7ijNS62',
            nombre: 'Test 1',
            organismo: 'Test 2'
        }
    ];

const emptyDependencia: Dependencia = {
    auto: false,
    direccion: '',
    id: '',
    nombre: '',
    organismo: ''
};

export {
    mockedDependencias,
    emptyDependencia
};
