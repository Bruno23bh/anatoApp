import { Component, OnInit } from '@angular/core';
import { FaqContent } from 'src/app/shared/interfaces/faq-content';
import { ContentService } from 'src/app/shared/services/content.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  faqContent: FaqContent;
  helpItems: {
    title: string;
    expand: boolean;
    icon: string;
    description: string;
    firstImagePath: string;
    secondImagePath?: string;
  }[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.faqContent = this.contentService.contents.faq;
    this.helpItems = this.contentService.contents.faq.helpListInstalacionItems;
  }

  expandItem(selectedIndex: number) {
    for (let index = 0; index < this.helpItems.length; index++) {
      if (selectedIndex === index) {
        this.helpItems[index].expand = !this.helpItems[index].expand;
        break;
      }
    }
  }

}
