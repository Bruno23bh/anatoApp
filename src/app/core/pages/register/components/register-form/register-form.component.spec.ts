import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { PasswordValidator } from 'src/app/core/validators/password.validator';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';

import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [RegisterFormComponent],
      imports: [
        IonicModule,
        CommonModule,
        SimpleMaskModule,
        FormsModule,
        ReactiveFormsModule,
        IurisUtilsModule
      ],
      providers: [
        FormBuilder
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    component.registerForm = new FormBuilder().group({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      organizacion: new FormControl('', Validators.required),
      domicilio: new FormControl('', Validators.required),
      nombreApellidoResponsable: new FormControl('', Validators.required),
      emailContacto: new FormControl('', Validators.required),
      telefonoContacto: new FormControl('', Validators.required),
      cuit: new FormControl(''),
      email: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      matching_passwords: new FormGroup(
        {
          password: new FormControl('',
            Validators.compose([
              Validators.minLength(5),
              Validators.required,
              Validators.pattern(
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'
              ),
            ])
          ),
          confirmPassword: new FormControl('', Validators.required),
        },
        (formGroup: FormGroup) => PasswordValidator.areEqual(formGroup)
      )
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show or hide the password', () => {
    component.showHidePassword();
    expect(component).toBeTruthy();
  });

  it('should show or hide the repeat password', () => {
    component.showHideRepeatPassword();
    expect(component).toBeTruthy();
  });
});
