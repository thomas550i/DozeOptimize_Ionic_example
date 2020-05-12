import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,platform: Platform) {

    platform.ready().then(() => {
    (<any>window).cordova.plugins.DozeOptimize.IsIgnoringBatteryOptimizations(function (responce){
      console.log("IsIgnoringBatteryOptimizations: "+responce);
          if(responce=="false")
          {
            (<any>window).cordova.plugins.DozeOptimize.RequestOptimizations(function (responce){
              console.log(responce);
            }, function (error){
            console.error("BatteryOptimizations Request Error"+error);			
            });
          }
          else
          {
            console.log("Application already Ignoring Battery Optimizations");
          }		
    }, function (error){
    console.error("IsIgnoringBatteryOptimizations Error"+error);    
    });

  });



  }



}
