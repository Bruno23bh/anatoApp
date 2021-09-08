import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from '../../../core/interfaces/usuario';
import { RecursosContent } from '../../../shared/interfaces/recursos-content';
import { ContentService } from '../../../shared/services/content.service';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.page.html',
  styleUrls: ['./recursos.page.scss'],
})
export class RecursosPage implements OnInit {
  usuario: Usuario;
  recursos: RecursosContent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.usuario = this.activatedRoute.snapshot.data.usuario;
    this.recursos = this.contentService.contents.recursos;
  }

  goToNormativas() {
    if (this.usuario) {
      this.router.navigate([`normativas/${this.usuario.organizacionId}`], { relativeTo: this.activatedRoute });
    }
  }

  goToFormularios() {
    if (this.usuario) {
      this.router.navigate([`formularios/${this.usuario.organizacionId}`], { relativeTo: this.activatedRoute });
    }
  }

  goToPrivados() {
    if (this.usuario) {
      this.router.navigate([`privados/${this.usuario.organizacionId}`], { relativeTo: this.activatedRoute });
    }
  }

  onBack() {
    this.router.navigate([`core/home/${this.usuario.id}`]);
  }
}
