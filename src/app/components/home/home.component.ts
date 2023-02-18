import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteDto } from '../../shared/dto';
import { Curiosity, User } from '../../shared/models';
import { HttpService } from '../../shared/services/http.service';
import { StateService } from '../../shared/services/state.service';
import { SubscriptionsContainer } from '../../shared/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  curiosities: Curiosity[] = [];

  profile?: User;

  private subs = new SubscriptionsContainer();

  constructor(
    private state$: StateService,
    private router: Router,
    private http$: HttpService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.subs.add = this.state$.isLoggedIn$.subscribe({
      next: (isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate([''], { replaceUrl: true });
        }
      }
    });

    this.subs.add = this.state$.profile$.subscribe({
      next: (profile) => {
        this.profile = profile;
      }
    });

    this.getAllCuriosities();

  };

  ngOnDestroy(): void {
    this.subs.dispose();
  };

  getAllCuriosities(): void {
    this.http$.getAllCuriosities().subscribe(result => {
      this.curiosities = [...result];
    });
  };

}
