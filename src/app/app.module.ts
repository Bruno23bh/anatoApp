import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, isDevMode, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/firestore/';
import { AngularFireFunctionsModule, REGION } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFirePerformanceModule, PerformanceMonitoringService } from '@angular/fire/performance';
import { AngularFireRemoteConfigModule, DEFAULTS, SETTINGS } from '@angular/fire/remote-config';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import * as Sentry from '@sentry/browser';

import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { content } from './shared/constants/content.constant';
import { ErrorService } from './shared/services/error.service';

export const firebaseConfig = environment.firebase;

Sentry.init({
  dsn: 'https://cb61981a7e024936b088e496ebccd45d@o993077.ingest.sentry.io/5950970'
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestoreModule.enablePersistence(),
    AngularFireAnalyticsModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireAuthGuardModule,
    AngularFireMessagingModule,
    AppRoutingModule,
    AngularFireRemoteConfigModule,
    AngularFirePerformanceModule,
    ServiceWorkerModule.register('combined-sw.js', { enabled: environment.production }),
    FontAwesomeModule],
  providers: [
    StatusBar,
    SplashScreen,
    PerformanceMonitoringService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: REGION, useValue: 'us-central1' },
    { provide: DEFAULTS, useValue: content },
    {
      provide: SETTINGS,
      useFactory: () => isDevMode() ? { minimumFetchIntervalMillis: 10_000 } : {}
    },
    // Esto nos permite controlar tanto en desarrollo como produccion los intervalos en que la app busca info en el remote config
    // useFactory: () => isDevMode() ? { minimumFetchIntervalMillis: 1000 } : { minimumFetchIntervalMillis: 5000 }
    { provide: ErrorHandler, useClass: ErrorService },
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
