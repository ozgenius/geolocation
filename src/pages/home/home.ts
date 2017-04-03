import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private geolocation: Geolocation, public navCtrl: NavController) {
    
  }
    locationfind(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});
  }

}
