import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableAkitaProdMode, persistState } from '@datorama/akita';
import { IonicStorage } from './app/ionic.storage';
import { debounceTime } from 'rxjs/operators';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

const storage = persistState({
  include: ['auth'],
  storage: new IonicStorage,
  preStorageUpdateOperator: () => debounceTime(2000)
});

const providers = [{ provide: 'persistStorage', useValue: storage }];

platformBrowserDynamic(providers).bootstrapModule(AppModule)
.catch(err => console.log(err));