import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WriteDialog } from '../../dialogs/write/write.dialog';
import { Curiosity, User } from '../../shared/models';
import { StateService } from '../../shared/services/state.service';
import { SubscriptionsContainer } from '../../shared/utils';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit, OnDestroy {

  profile?: User;

  @Output() onLogout = new EventEmitter();

  @Output() onWriteCuriosity = new EventEmitter<Curiosity>();

  @Output() onNavChange = new EventEmitter();

  private subs = new SubscriptionsContainer();

  constructor(
    private state$: StateService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.subs.add = this.state$.profile$.subscribe(v => { this.profile = v; });
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }

  logout(): void {
    this.onLogout.emit();
  }

  openWriteDialog(): void {
    const dialogRef = this.dialog.open(WriteDialog);
    dialogRef.afterClosed().subscribe((curiosity: Curiosity) => {
      if (curiosity && this.profile) {
        curiosity.createdBy = this.profile.username;
        curiosity.createdTs = new Date().toISOString();
        this.onWriteCuriosity.emit(curiosity);
      }
    });
  }

  navChange(): void {
    this.onNavChange.emit();
  }

}
