import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [
        IonicModule,
        CommonModule,
        SimpleMaskModule,
        FormsModule,
        ReactiveFormsModule,
        IurisUtilsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    component.loginForm = new FormGroup({
      email: new FormControl(
        'infoutsimplex@gmail.com',
        Validators.compose([
          Validators.required,
          Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
        ])
      ),
      password: new FormControl(
        'Aa12345',
        Validators.compose([
          Validators.minLength(5),
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ])
      ),
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
});
