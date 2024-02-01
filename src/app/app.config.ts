import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ru_RU, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

registerLocaleData(ru);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNzI18n(ru_RU), importProvidersFrom(FormsModule), importProvidersFrom(HttpClientModule), provideAnimations()]
};
