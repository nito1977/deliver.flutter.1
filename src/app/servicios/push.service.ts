import { Injectable } from '@angular/core';
import { NotificationesModel } from '../models/notificaciones';

@Injectable()
export class PushService {
  cordova: any;
  NotificationPlugin: any;
  NotificationPluginChat: any;
  NotificationGlobal: any;
  NotificationGlobalChat: any;
  constructor() {
    this.cordova = window['cordova'] || navigator['cordova'];
    this.NotificationGlobal = window['Notification'];
    if (this.NotificationGlobal && this.NotificationGlobal.permission !== 'granted') {
      this.NotificationGlobal.requestPermission();
    }
    this.NotificationGlobalChat = window['Notification'];
    if (this.NotificationGlobalChat && this.NotificationGlobalChat.permission !== 'granted') {
      this.NotificationGlobalChat.requestPermission();
    }
  }

  public NotificarInfo(notificacion: NotificationesModel) {
    console.log(notificacion);
    if (this.cordova
      && this.cordova.plugins
      && this.cordova.plugins.notification
      && this.cordova.plugins.notification.local
    ) {
      try {
        this.cordova.plugins.notification.local.schedule(notificacion);
      } catch (ex) {
        console.log(ex);
      }
    } else {
      if (this.NotificationGlobal) {
        const data = {
          type: 'basic', // basic, list
          title: notificacion.title, // "Primary Title",
          state: 'success', // success, info, error, warning,
          body: notificacion.text, // "Primary message to display",
          icon: './assets/logoams.png', // url_to_small_icon",
          // items: [], //[{title: "Item1", message: "This is item 1."},
          // {title: "Item2", message: "This is item 2."},
          // {title: "Item3", message: "This is item 3."}],
          // acc1_func: undefined,
          // acc2_func: undefined,
          callback: function (btn) {
            console.log();
          }
        };
        this.NotificationPlugin = new window['Notification'](data.title, data);
      } else {

      }
    }
  }
  public NotificarChat(notificacionChat: NotificationesModel) {
    console.log(notificacionChat);
    if (this.cordova
      && this.cordova.plugins
      && this.cordova.plugins.notification
      && this.cordova.plugins.notification.local
    ) {
      try {
        this.cordova.plugins.notification.local.schedule(notificacionChat);
      } catch (ex) {
        console.log(ex);
      }
    } else {
      if (this.NotificationGlobalChat) {
        const data = {
          type: 'list', // basic, list
          title: notificacionChat.title, // "Primary Title",
          state: 'success', // success, info, error, warning,
          body: notificacionChat.text, // "Primary message to display",
          icon: './assets/logoams.png', // url_to_small_icon",

          items: [
           {title: 'Item1', message: 'This is item 1.'},
           {title: 'Item2', message: 'This is item 2.'},
           {title: 'Item3', message: 'This is item 3.'}],
           acc1_func: undefined,
           acc2_func: undefined,
          callback: function (btn) {
            console.log();
          }
        };
        this.NotificationPluginChat = new window['Notification'](data.title, data);
      } else {

      }
    }
  }

}
