import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Information } from 'core/model/components/side-nave';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
  information: Information[] = [
    { nume: 'One', name: 'Men', link: 'caual wear' },
    { nume: 'Two', name: 'Women', link: 'Party wear', linkTwo: 'Foot wear' },
    { nume: 'Three', name: 'Kides', link: 'accessories' },
  ];
}
