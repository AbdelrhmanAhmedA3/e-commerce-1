import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Langs } from 'core/enums/languages/language';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterLink, LocalizeRouterModule, JsonPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private translate: TranslateService, private router: Router) {}

  switchLang() {
    const lang =
      this.translate.currentLang == 'en' ? Langs.Arabic : Langs.English;

    window.location.replace(`${lang}/${this.router.url.slice(4)}`);
  }
}
