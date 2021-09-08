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
  selector: 'app-privados',
  templateUrl: './privados.page.html',
  styleUrls: ['./privados.page.scss'],
})
export class PrivadosPage implements OnInit {

  showNoPrivadosMessage = false;
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
    this.organizacion = this.activatedRoute.snapshot.data.organizacion;
    this.showNoPrivadosMessage = this.organizacion.privados.length === 0 ? true : false;
    this.recursosContent = this.contentService.contents.recursos;
  }

  filesHasChanged(files: FileToUpLoad[]) {
    if (files) {
      this.organizacion.privados = files;
      this.onSubmit();
    }
  }

  onSubmit() {
    // this.buildPrivado();
    this.organizacionService
      .putOrganizacion(this.organizacion, this.organizacion.id)
      .then(
        () => {
          const values: any = {
            message: `Se han actualizado las privados`,
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

  // buildPrivado() {
  //   this.organizacion = {
  //     ...this.organizacion,
  //     privados: this.organizacion.privados
  //   };
  // }
}
