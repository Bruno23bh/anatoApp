import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter<void>();
  @Input() loginForm: FormGroup;
  @Input() content: any;
  isPasswordVisible = false;

  constructor() { }

  ngOnInit() { }

  showHidePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    this.submitForm.emit();
  }

}
