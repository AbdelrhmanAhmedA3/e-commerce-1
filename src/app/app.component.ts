import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './pages/header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, HeaderComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translateService: TranslateService
  ) {
    const htmlEle = this.document.getElementsByTagName('html')[0];
    htmlEle.lang = this.translateService.currentLang;
  }
}
