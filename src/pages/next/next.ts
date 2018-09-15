import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { BluetoothLE } from '@ionic-native/bluetooth-le';

@Component({
  selector: 'page-next',
  templateUrl: 'next.html',
})
export class NextPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public bluetoothle: BluetoothLE, public plt: Platform) {
  
    this.plt.ready().then((readySource) => {

      console.log('Platform ready from', readySource);
   
      this.bluetoothle.initialize().then(ble => {
        console.log('ble', ble.status) // logs 'enabled'
      });
   
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextPage');
    this.bluetoothle.startScan({
      "services": [
        "180D",
        "180F"
      ],
      "scanMode": this.bluetoothle.SCAN_MODE_LOW_LATENCY,
      "matchMode": this.bluetoothle.MATCH_MODE_AGRESSIVE,
      "matchNum": this.bluetoothle.MATCH_NUM_MAX_ADVERTISEMENT,
      "callbackType": this.bluetoothle.CALLBACK_TYPE_ALL_MATCHES,
    }).subscribe(
      success => {
        console.log('Scan Result: ' + success.status.status);
        if(success.status.status == 'scanResult') {
          console.log(success.status.name);
        }
      }
    );
  }

}
