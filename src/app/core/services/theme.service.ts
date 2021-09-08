import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderFactory2: RendererFactory2) {
    this.renderer = this.renderFactory2.createRenderer(null, null);
  }

  enableDark() {
    this.renderer.setAttribute(this.document.body, 'color-theme', 'dark');
  }

  enableLight() {
    this.renderer.setAttribute(this.document.body, 'color-theme', 'light');
  }
}
