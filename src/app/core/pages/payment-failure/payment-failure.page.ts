import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-failure',
  templateUrl: './payment-failure.page.html',
  styleUrls: ['./payment-failure.page.scss'],
})
export class PaymentFailurePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  goToLogin() {
    this.router.navigate(['/core/login']);
  }

}
