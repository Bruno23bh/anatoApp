import { Component, OnInit } from '@angular/core';

import { NotFoundContent } from '../../interfaces/not-found-content';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
  notFoundContent: NotFoundContent;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.notFoundContent = this.contentService.contents.notFound;
  }

  refresh() {
    location.reload();
  }

}
