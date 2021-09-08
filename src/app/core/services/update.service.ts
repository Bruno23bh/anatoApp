import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// FIXME: Add this to the RC
export class UpdateService {
  public isUpdateAvailable: boolean;
  constructor(
    private swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      interval(6 * 60 * 60).subscribe(() =>
        swUpdate.checkForUpdate()
          // eslint-disable-next-line no-console
          .then(() => console.info('Buscando actualizaciones'))
          .catch(() => console.error('Error buscando actualizaciones')));
    }
  }

  public checkForUpdates(): void {
    this.swUpdate.available
      .subscribe(() => {
        this.isUpdateAvailable = true;
      });
  }

  public updateAndRestart(): void {
    // eslint-disable-next-line no-console
    console.info('Actualizando Iuris');
    this.swUpdate.activateUpdate()
      .then(() => document.location.reload())
      .catch(() => console.error('Error actualizando iuris'));
  }
}
