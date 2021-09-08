import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { AuthService } from '../../services/auth.service';

/* eslint-disable no-underscore-dangle */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  loginForm: FormGroup;
  registerForm: FormGroup;
  unsubscribe: Subject<void> = new Subject();
  contentForm = {
    email: {
      input: 'Correo electrónico',
      validations: [
        {
          type: 'required',
          message: 'Campo requerido'
        },
        {
          type: 'minlength',
          message: 'Mínimo 5 caracteres.'
        },
        {
          type: 'maxlength',
          message: 'Máximo 100 caracteres.'
        },
        {
          type: 'pattern',
          message: 'Formato incorrecto. Ejemplo: nombre@email.com'
        }
      ]
    },
    password: {
      input: 'Password',
      validations: [
        {
          type: 'required',
          message: 'Campo requerido'
        },
        {
          type: 'minlength',
          message: 'Mínimo 5 caracteres.'
        },
        {
          type: 'maxlength',
          message: 'Máximo 50 caracteres.'
        }
      ]
    }
  };

  constructor(
    private alertService: AlertService,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(
        null,
        {
          validators:
            Validators.compose([
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(100),
              Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
            ]),
          updateOn: 'change'
        }
      ),
      password: new FormControl(
        null,
        {
          validators:
            Validators.compose([
              Validators.minLength(6),
              Validators.maxLength(50),
              Validators.required
            ]),
          updateOn: 'change'
        }
      ),
    });
  }

  onSubmit() {
    this.authService
      .login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
      .then(
        (response: any) => {
          if (response.user.emailVerified) {
            const isFirstTime = moment().isSame(response.user.metadata.creationTime, 'day');
            if (isFirstTime) {
              this.router.navigate([`core/welcome`, response.user.uid]);
            } else {
              this.router.navigate([`core/home`, response.user.uid]);
            }
          } else {
            this.logout();
          }
        })
      .catch(
        (error) => {
          if (error && error.code === 'auth/user-not-found') {
            // eslint-disable-next-line max-len
            this.toastService.presentErrorToast('No existe una cuenta asociada al correo electrónico ingresado. Verifique y vuelva a intentar', true);
          } else {
            this.toastService.presentErrorToast(error ? error.message : 'Error', true);
          }
        }
      );
  }

  logout() {
    this.authService.logout()
      .then(
        () => {
          const values = {
            header: 'El email aún no fue validado',
            message: 'Por favor, valide su correo electrónico antes de ingresar',
            color: 'danger',
          };
          this.toastService.presentToast(values);
          this.router.navigate(['/core/login']);
        }
      )
      .catch(
        (error) => {
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  async onResetPassword() {
    const values = {
      header: 'Recuperar contraseña',
      message: 'Introduzca el correo electrónico para recuperar la contraseña'
    };

    this.alertService
      .showForgotChangePasswordlAlert(values)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (response: any) => {
          if (response.email) {
            if (response.email.match('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')) {
              this.sendResetEmail(response.email);
            } else {
              this.toastService.presentErrorToast('Formato incorrecto. Ejemplo: nombre@email.com', true);
            }
          }
        },
        (error) => { this.toastService.presentErrorToast(error ? error.message : 'Error'); }
      );
  }

  sendResetEmail(email: string) {
    this.authService.sendPasswordResetEmail(email)
      .then(
        () => {
          const values: any = {
            message: 'Le hemos enviado un email para recuperar su contraseña.',
            color: 'success',
          };
          this.toastService.presentToast(values);
        },
      )
      .catch(
        (error) => { this.toastService.presentErrorToast(error ? error.message : 'Error', true); }
      );
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
