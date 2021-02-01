import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
if (document['deviceready'] === undefined) {
  document['deviceready'] = setTimeout(onDeviceReady, 0);
} else {
  document.addEventListener('deviceready', onDeviceReady, false);
}
function onDeviceReady() {

  platformBrowserDynamic().bootstrapModule(AppModule);
}

