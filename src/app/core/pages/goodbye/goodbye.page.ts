import { Component, OnInit } from '@angular/core';

import { GoodbyeContent } from '../../../shared/interfaces/goodbye-content';
import { ContentService } from '../../../shared/services/content.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-goodbye',
  templateUrl: './goodbye.page.html',
  styleUrls: ['./goodbye.page.scss'],
})
export class GoodbyePage implements OnInit {

  goodbyeContent: GoodbyeContent;

  constructor(
    private authService: AuthService,
    private contentService: ContentService,
  ) { }

  ngOnInit() {
    this.authService.logout();
    this.goodbyeContent = this.contentService.contents.goodbye;
  }
}


