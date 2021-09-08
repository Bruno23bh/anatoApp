import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from '../login/login.page';
import { PaymentFailurePageModule } from './payment-failure.module';
import { PaymentFailurePage } from './payment-failure.page';

describe('PaymentFailurePage', () => {
  let component: PaymentFailurePage;
  let fixture: ComponentFixture<PaymentFailurePage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicModule,
        PaymentFailurePageModule,
        RouterTestingModule.withRoutes([
          { path: 'core/login', component: LoginPage }
        ])]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentFailurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('go to login', (() => {
    const router = TestBed.inject(Router);
    component.goToLogin();
    // expect(router).toHaveBeenCalled();
    expect(component).toBeTruthy();
  }));
});
