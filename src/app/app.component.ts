import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';  
import { Config } from './config';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      if(platform.is('core') || platform.is('mobileweb')) {
        console.log("Platform is core or is mobile web");
      } else {
        var notificationOpenedCallback = function(jsonData) {
          console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };
        window["plugins"].OneSignal
        .startInit(Config.oneSignalAppId, Config.fireBaseServerId)
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
      }
    });
  }
  private onPushReceived(payload: OSNotificationPayload) {  
    alert('Push recevied:' + payload.body);  
  }  
    
  private onPushOpened(payload: OSNotificationPayload) {  
    alert('Push opened: ' + payload.body);  
  }  
}

