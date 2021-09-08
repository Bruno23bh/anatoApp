import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';

@Injectable({
  providedIn: 'root'
})

export class ErrorService implements ErrorHandler {

  constructor() { }

  handleError(error: any) {
    if (error) {
      const eventId = Sentry.captureException(error.originalError || error);
      // The __annotations__ error comes from angularfire analitycs. Didn't find a correct way to approach the error.
      if ((typeof error === 'string' && error && !error.toString().includes('__annotations__'))
        || (error && error.toString().includes('Missing or insufficient permissions'))) {
        Sentry.showReportDialog({ eventId });
      }
    }
  }
}
