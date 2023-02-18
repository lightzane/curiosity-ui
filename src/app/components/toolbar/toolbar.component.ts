import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { slideDown } from '../../my-animation';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideDown]
})
export class ToolbarComponent {

  @Input() title!: string;

  @Output() onMenuClick = new EventEmitter();

  menuClick(): void {
    this.onMenuClick.emit();
  }

}
