import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IBeacon } from '@ionic-native/ibeacon';
import { NextPage } from '../pages/next/next';
import { BeaconProvider } from '../services/beacon-provider';
import { BluetoothLE } from '@ionic-native/bluetooth-le';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NextPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NextPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IBeacon,
    BeaconProvider,
    BluetoothLE,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
