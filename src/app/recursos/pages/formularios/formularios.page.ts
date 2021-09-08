import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { FileToUpLoad } from 'src/app/shared/interfaces/file-to-upload';
import { ToastService } from 'src/app/shared/services/toast.service';

import { Organizacion } from '../../../core/interfaces/organizacion';
import { OrganizacionService } from '../../../core/services/organizacion.service';
import { RecursosContent } from '../../../shared/interfaces/recursos-content';
import { ContentService } from '../../../shared/services/content.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.page.html',
  styleUrls: ['./formularios.page.scss'],
})
export class FormulariosPage implements OnInit {

  showNoFormulariosMessage = false;
  organizacion: Organizacion;

  filesHasBeenChanged = false;
  unsubscribe: Subject<void> = new Subject();
  userUid: any;
  recursosContent: RecursosContent;

  constructor(
    private toastService: ToastService,
    private organizacionService: OrganizacionService,
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.recursosContent = this.contentService.contents.recursos;
    this.organizacion = this.activatedRoute.snapshot.data.organizacion;
    this.showNoFormulariosMessage = this.organizacion.formularios.length === 0 ? true : false;
  }

  filesHasChanged(files: FileToUpLoad[]) {
    if (files) {
      this.organizacion.formularios = files;
      this.onSubmit();
    }
  }

  onSubmit() {
    // this.buildFormularios();
    this.organizacionService
      .putOrganizacion(this.organizacion, this.organizacion.id)
      .then(
        () => {
          // FIXME: Add this to remote config
          const values: any = {
            message: `Se han actualizado los formularios`,
            color: 'success',
          };
          this.toastService.presentToast(values);
        }
      )
      .catch(
        (error) => {
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  // buildFormularios() {
  //   this.organizacion = {
  //     ...this.organizacion
  //     // formularios: this.organizacion.formularios
  //   };
  // }

}
