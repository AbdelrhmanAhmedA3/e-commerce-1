import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Observable, tap } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';
import { TransferState, StateKey, makeStateKey } from '@angular/core';

export class CustomTranslateHttpLoader implements TranslateLoader {
  constructor(private http: HttpClient, private transferState: TransferState) {}

  public getTranslation(lang: string): Observable<any> {
    const key: StateKey<any> = makeStateKey<any>('transfer-translate-' + lang);
    const data = this.transferState.get(key, null);

    // First we are looking for the translations in transfer-state,
    // if none found, http load as fallback
    if (data) {
      return new Observable((observer) => {
        observer.next(data);
        observer.complete();
      });
    }
    return new TranslateHttpLoader(this.http, './assets/i18n/', '.json')
      .getTranslation(lang)
      .pipe(
        tap((res) => {
          this.transferState.set(key, res);
        })
      );
  }
}

/**
 * A utility function that assist with localize router.
 */
export function translateHttpLoaderFactory(
  httpClient: HttpClient,
  transferState: TransferState
) {
  return new CustomTranslateHttpLoader(httpClient, transferState);
}
