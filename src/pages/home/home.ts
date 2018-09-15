import { Component, NgZone } from '@angular/core';
import { NavController,Platform, Events } from 'ionic-angular';
import { IBeacon, IBeaconDelegate } from '@ionic-native/ibeacon';
import { NextPage } from '../next/next';
import { BeaconProvider } from '../../services/beacon-provider'
import { resolveDefinition } from '@angular/core/src/view/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  delegate:IBeaconDelegate;
  beaconFound = false;
  nxtPage = NextPage;
  beacons = [];
  zone:any ;

  constructor(public navCtrl: NavController, public platform: Platform,
     private ibeacon: IBeacon,public beaconProvider: BeaconProvider, public events: Events) {
      this.zone = new NgZone({ enableLongStackTrace: false });
  }
  ionViewDidLoad() {
    this.platform.ready().then(() => {
    this.beaconProvider.initialise().then((isInitialised) => {
    if (isInitialised) {
    this.listenToBeaconEvents();
    }
    });
    });
    }
    
    listenToBeaconEvents() {
    this.events.subscribe('didRangeBeaconsInRegion', (data) => {
    
    // update the UI with the beacon list
    this.zone.run(() => {
    
    // this.beacons = [];
    console.log('THis is the DATA:'+ data.eventType);  
    console.log('this is the list: ' + data.beacons);
    let beaconList = data.beacons;
    beaconList.forEach((beacon) => {
    this.beacons.push(beacon);

    });
    
    });
    
    });
    }

  // startWork() {
  //   this.delegate = this.ibeacon.Delegate();
  //   // Subscribe to some of the delegate's event handlers
  //     this.delegate.didRangeBeaconsInRegion()
  //     .subscribe(
  //       data => console.log('didRangeBeaconsInRegion: ', data),
  //       error => console.error()
  //     );
  //     this.delegate.didStartMonitoringForRegion()
  //     .subscribe(
  //       data => console.log('didStartMonitoringForRegion: ', data),
  //       error => console.error()
  //     );
      
    
  //     let beaconRegion = this.ibeacon.BeaconRegion('bedBeacon','B9407F30-F5F8-466E-AFF9-25556B579999');
      
  //     this.ibeacon.startMonitoringForRegion(beaconRegion)
  //     .then(
  //       () => console.log('Native layer recieved the request to monitoring'),
  //       error => console.error('Native layer failed to begin monitoring: ', error)
  //     );

  //     this.ibeacon.stopRangingBeaconsInRegion(beaconRegion).then(
  //       () => {
  //         console.log("Ranged and found");
  //       }
  //     );

  //     this.delegate.didEnterRegion()
  // .subscribe(
  //   data => {
  //     console.log('didEnterRegion: ', data);
  //   }
  // );
      
  // }
  
 

}
