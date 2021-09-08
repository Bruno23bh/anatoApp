import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { Usuario } from 'src/app/core/interfaces/usuario';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';

import { mockedUsuarios } from '../../../../../shared/mocks/mocked-usuarios';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  const angularFirestoreStub = {
    collection: (usuarios: Usuario[]) => mockedUsuarios
  };

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [
        IonicModule,
        CommonModule,
        SimpleMaskModule,
        FormsModule,
        ReactiveFormsModule,
        IurisUtilsModule
      ],
      providers: [
        { provide: AngularFirestore, useValue: angularFirestoreStub },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    component.userForm = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      documentoTipo: new FormControl(''),
      documentoNro: new FormControl(''),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')])),
      fechaNacimiento: new FormControl(''),
      claveFiscal: new FormControl(''),
      claveSeguridadSocial: new FormControl(''),
      cuil: new FormControl(''),
      telefono: new FormControl(''),
      direccion: new FormControl(''),
      piso: new FormControl(''),
      departamento: new FormControl(''),
      localidad: new FormControl(''),
      provincia: new FormControl(''),
      codigoPostal: new FormControl(''),
      sexo: new FormControl(''),
      estadoCivil: new FormControl(''),
      nacionalidad: new FormControl('')
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should copy to the clipboard', () => {
  //   const data = 'Test data';
  //   component.copyToClipboard(data);
  //   expect(component).toBeTruthy();
  // });
});
