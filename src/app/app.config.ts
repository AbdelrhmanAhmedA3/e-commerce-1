import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  TransferState,
  provideClientHydration,
} from '@angular/platform-browser';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { translateHttpLoaderFactory } from './core/utilities/translate-http-loader';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import {
  CacheMechanism,
  LocalizeParser,
  LocalizeRouterModule,
  LocalizeRouterService,
  LocalizeRouterSettings,
  ManualParserLoader,
} from '@gilsdav/ngx-translate-router';
import { Location } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideClientHydration(),

    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: translateHttpLoaderFactory,
          deps: [HttpClient, TransferState],
        },
      }),
      LocalizeRouterModule.forRoot(routes, {
        parser: {
          provide: LocalizeParser,
          useFactory: (
            translate: TranslateService,
            location: Location,
            settings: LocalizeRouterSettings
          ) =>
            new ManualParserLoader(
              translate,
              location,
              settings,
              ['en', 'ar'],
              'ROUTES.'
            ),
          deps: [TranslateService, Location, LocalizeRouterSettings],
        },
        initialNavigation: true,

        cacheMechanism: CacheMechanism.Cookie,
      })
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: (translate: LocalizeRouterService) => () =>
        translate.hooks.initialized,
      deps: [LocalizeRouterService],
      multi: true,
    },
  ],
};
