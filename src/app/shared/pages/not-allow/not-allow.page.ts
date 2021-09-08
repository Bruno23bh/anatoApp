import { Component, OnInit } from '@angular/core';

import { NotAllowContent } from '../../interfaces/not-allow-content';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-not-allow',
  templateUrl: './not-allow.page.html',
  styleUrls: ['./not-allow.page.scss'],
})
export class NotAllowPage implements OnInit {
  notAllowContent: NotAllowContent;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.notAllowContent = this.contentService.contents.notAllow;
  }

}
