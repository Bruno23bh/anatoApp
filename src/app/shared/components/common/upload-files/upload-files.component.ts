import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Organizacion } from 'src/app/core/interfaces/organizacion';
import { OrganizacionService } from 'src/app/core/services/organizacion.service';
import { FileToUpLoad } from 'src/app/shared/interfaces/file-to-upload';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ContentService } from 'src/app/shared/services/content.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { UploadFilesContent } from '../../../interfaces/uploadFiles-content';


// eslint-disable-next-line @typescript-eslint/naming-convention
const { Browser } = Plugins;

const MIN_SEARCH_CHARACTERS = 3;
const UPLOAD_MAX_SIZE_BYTES = 134217728;

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
})
export class UploadFilesComponent implements OnInit {
  @Input() organizationId: string;
  @Input() entity: any;
  @Input() path: string;
  @Input() type: string;
  @Output() valueChange = new EventEmitter<FileToUpLoad[]>();
  @ViewChild('filesInput') filesInput;

  unsubscribe: Subject<void> = new Subject();
  isUploadingFile = false;
  searchValue = '';
  uploadFilesContent: UploadFilesContent;
  loadedFiles: FileToUpLoad[];
  organizacion: Organizacion;

  constructor(
    private angularFireStorage: AngularFireStorage,
    private alertService: AlertService,
    private toastService: ToastService,
    private contentService: ContentService,
    private organizacionService: OrganizacionService) {
  }

  ngOnInit() {
    if (this.type === 'card') {
      this.loadedFiles = this.entity.files;
    } else {
      this.loadedFiles = this.entity;
    }
    this.uploadFilesContent = this.contentService.contents.uploadFiles;
    this.getOrganizacion();
  }

  getOrganizacion() {
    this.organizacionService
      .getOrganizacion(this.organizationId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (organizacion: Organizacion) => {
          if (organizacion) {
            this.organizacion = organizacion;
          }
        },
        (error) => {
          this.toastService.presentErrorToast(error.message);
        }
      );
  }

  putOrganization() {
    this.organizacionService
      .putOrganizacion(this.organizacion, this.organizacion.id)
      .then(
        () => { }
      )
      .catch(
        (error) => {
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  uploadEntity(event: any, name?: string) {
    if (this.checkFileSize(event.target.files[0].size) && this.checkOrganizationStorage(event.target.files[0].size)) {
      this.organizacion.remainingStorage = this.organizacion.remainingStorage - event.target.files[0].size;
      this.organizacion.consumedStorage = this.organizacion.consumedStorage + event.target.files[0].size;
      this.putOrganization();
      this.isUploadingFile = true;
      const file = name ? name : event.target.files[0];
      // Type CARD: Tengo entity.id -> estoy subiendo archivo para pago y caso. Sino, uso el otro path (que corresponde a formularios y normativas)
      const filePath = this.buildPath(this.safeFormatFilePath(file.name));
      const fileRef = this.angularFireStorage.ref(filePath);
      const task = this.angularFireStorage.upload(filePath, file);
      const size = event.target.files[0].size;
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
              (fileUrl: string) => {
                this.pushFiles(fileUrl, file.name, file.type, filePath, size, false);
                this.isUploadingFile = false;
                this.filesInput.nativeElement.value = '';
              },
              (error) => { this.toastService.presentErrorToast(error ? error.message : 'Error'); }
            );
        }))
        .pipe(takeUntil(this.unsubscribe))
        .subscribe();

    } else {
      this.toastService.presentErrorToast(`Ha superado el limite por archivo (128MB) o no tiene espacio disponible.`);
    }
  }

  checkFileSize(size: number): boolean {
    let isAllowedToUpload = true;
    if (size > UPLOAD_MAX_SIZE_BYTES) {
      isAllowedToUpload = false;
    }
    return isAllowedToUpload;
  }

  checkOrganizationStorage(size: number): boolean {
    let isAllowedToUpload = true;
    if (((this.organizacion.remainingStorage + this.organizacion.extraStorage) - size) < 0) {
      isAllowedToUpload = false;
    }
    return isAllowedToUpload;
  }

  buildPath(fileName: string): string {
    if (this.type === 'card') {
      return `${this.path}/${this.entity.id}/${fileName}`;
    } else {
      return `${this.path}/${fileName}`;
    }
  }

  // FIXME: Add this to the remote config and refactor the code
  pushFiles(fileUrl: string, name: string, type: string, filePath: string, size: number, isEditing: boolean) {
    if (this.type === 'card') {
      if (this.entity.files.length === 0) {
        this.entity.files = [];
      }
      let canEmit = true;
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let index = 0; index < this.entity.files.length; index++) {
        if (this.entity.files[index].name === name) {
          this.toastService.presentErrorToast('No se pueden cargar 2 archivos con el mismo nombre ni colocarle el mismo nombre a un archivo ya existente', true);
          canEmit = false;
          break;
        }
      }
      if (isEditing && canEmit) {
        this.entity.files.forEach((entityFile, i) => {
          if (entityFile.filePath === filePath) {
            this.entity.files[i].name = name;
          }
        });
      } else if (canEmit) {
        this.entity.files.push({ fileUrl, name, type, filePath, size });
      }

      if (canEmit) {
        this.valueChange.emit(this.entity.files);
        this.loadedFiles = this.entity.files;
      }
    } else if (this.type === 'page') {
      if (this.entity.length === 0) {
        this.entity = [];
      }
      let canEmit = true;
      // Here we make sure we don't have the name twice
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let index = 0; index < this.entity.length; index++) {
        if (this.entity[index].name === name) {
          this.toastService.presentErrorToast('No se pueden cargar 2 archivos con el mismo nombre ni colocarle el mismo nombre a un archivo ya existente', true);
          canEmit = false;
          break;
        }
      }

      if (isEditing && canEmit) {
        this.entity.forEach((entityFile, i) => {
          if (entityFile.filePath === filePath) {
            this.entity[i].name = name;
          }
        });
      } else if (canEmit) {
        this.entity.push({ fileUrl, name, type, filePath, size });
      }
      if (canEmit) {
        this.valueChange.emit(this.entity);
        this.loadedFiles = this.entity;
      }
    }
  }

  downloadEntity(entityFile: any) {
    this.angularFireStorage.ref(entityFile.filePath).getDownloadURL()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (response: any) => {
          window.open(response);
        },
        (error) => { this.toastService.presentErrorToast(error ? error.message : 'Error'); }
      );
  }

  removeEntityFile(entityFile: FileToUpLoad) {
    const values = {
      header: '¡Atencion!',
      message: 'Esta a punto de eliminar un recurso. ¿Esta seguro que desea eliminarlo?'
    };
    this.alertService
      .showYesNoAlert(values, 'Eliminar', 'Cancelar')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (response: boolean) => {
          if (response) {
            if (entityFile.type !== 'text/link') {
              this.deleteEntityFile(entityFile, entityFile.size);
            }
            this.deleteFileFromEntity(entityFile);
          }
        },
        (error) => { this.toastService.presentErrorToast(error ? error.message : 'Error'); }
      );
  }

  deleteFileFromEntity(entityFile: FileToUpLoad) {
    if (this.type === 'card') {
      this.entity.files.forEach((file, index) => {
        if (this.entity.files[index].name === entityFile.name) {
          this.entity.files.splice(index, 1);
          this.initializeFiles();
          this.valueChange.emit(this.entity.files);
        }
      });
    } else {
      this.entity.forEach((file, index) => {
        if (this.entity[index].name === entityFile.name) {
          this.entity.splice(index, 1);
          this.initializeFiles();
          this.valueChange.emit(this.entity);
          this.searchValue = '';
        }
      });
    }
  }

  deleteEntityFile(entityFile: FileToUpLoad, size: number) {
    if (this.angularFireStorage.storage) {
      this.angularFireStorage.storage.refFromURL(entityFile.fileUrl).delete()
        .then(
          () => {
            this.organizacion.remainingStorage = this.organizacion.remainingStorage + size;
            this.organizacion.consumedStorage = this.organizacion.consumedStorage - size;
            this.putOrganization();
          }
        )
        .catch(
          (error) => { this.toastService.presentErrorToast(error ? error.message : 'Error'); }
        );
    }
  }

  async takePicture() {
    this.isUploadingFile = true;
    Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    })
      .then(
        (image) => {
          const name: string = 'Foto - ' + new Date().toISOString().split('T');
          const filePath = this.buildPath(name);
          // As we don't have the size of the photo taken by the camera, we put 5MB
          this.uploadImageToFirebase(filePath, image.dataUrl, name, 5242880);
        }
      )
      .catch(
        (error) => {
          if (error !== 'User cancelled photos app') {
            this.toastService.presentErrorToast(error ? error.message : 'Error');
          }
          this.isUploadingFile = false;
        }
      );
  }

  uploadImageToFirebase = async (filePath, file, name, size) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        resolve(xhr.response);
      };
      xhr.responseType = 'blob';
      xhr.open('GET', file, true);
      xhr.send(null);
    });

    const ref = this.angularFireStorage.ref(filePath);

    const snapshot = await ref.put(blob);

    snapshot.ref
      .getDownloadURL()
      .then(
        (fileUrl: string) => {
          this.pushFiles(fileUrl, name, 'image/jpeg', filePath, size, false);
          this.isUploadingFile = false;
        }
      )
      .catch(
        (error) => { this.toastService.presentErrorToast(error ? error.message : 'Error'); }
      );
  };

  filterFiles(event: any) {
    this.initializeFiles();
    this.searchValue = event.target.value;
    if (!this.searchValue || event.target.value.length < MIN_SEARCH_CHARACTERS) {
      return;
    }
    if (this.type === 'card') {
      this.loadedFiles = this.entity.files.filter(file => {
        if (file.name && this.searchValue) {
          if (file.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
    } else {
      this.loadedFiles = this.loadedFiles.filter(file => {
        if (file.name && this.searchValue) {
          if (file.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
    }
  }

  initializeFiles(): void {
    if (this.type === 'card') {
      this.loadedFiles = this.entity.files;
    } else {
      this.loadedFiles = this.entity;
    }
  }

  uploadLink() {
    const values = {
      header: 'Agregar link',
      subHeader: 'Por favor ingrese un nombre y el link que desea añadir'
    };
    this.alertService.addLinkResourceAlert(values, 'Cancelar', 'Añadir', 'Nombre', 'Link')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (response: any) => {
          if (response) {
            const urlRegex = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
            const isValidUrl = urlRegex.test(response.link);
            if (!response.nombre || !response.link || !isValidUrl) {
              this.toastService.presentErrorToast('Debe ingresar un nombre y un link valido', true);
            } else {
              this.pushFiles(response.link, response.nombre, 'text/link', response.link, 0, false);
            }
          }
        },
        (error) => { this.toastService.presentErrorToast(error ? error.message : 'Error'); }
      );
  }

  async openUrl(url: string) {
    await Browser.open({ url });
  }

  editEntityName(entity: any) {
    const values = {
      header: 'Editar nombre',
      subHeader: 'Por favor ingrese un nuevo nombre para el recurso'
    };
    this.alertService.editResourceNameAlert(values, 'Cancelar', 'Editar', 'Nombre')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (response: any) => {
          if (response) {
            if (!response.nombre) {
              this.toastService.presentErrorToast('Debe ingresar un nombre', true);
            } else {
              this.pushFiles(response.link, response.nombre, entity.type, entity.filePath, 0, true);
            }
          }
        },
        (error) => { this.toastService.presentErrorToast(error ? error.message : 'Error'); }
      );
  }

  safeFormatFilePath(path: string): string {
    return path.replace(/\//g, '');
  }
}
