import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThanksContent } from 'src/app/shared/interfaces/thanks-content';
import { ContentService } from 'src/app/shared/services/content.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.page.html',
  styleUrls: ['./thanks.page.scss'],
})
export class ThanksPage implements OnInit {
  thanksContent: ThanksContent;

  constructor(
    private authService: AuthService,
    private router: Router,
    private contentService: ContentService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.thanksContent = this.contentService.contents.thanks;
    this.loadingService.dismiss();
  }

  logout() {
    this.authService.logout();
    this.router.navigate([`core/login`]);
  }
}
