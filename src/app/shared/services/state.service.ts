import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, shareReplay } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  /** Breakpoints list to close chatSidenav */
  private bps = [
    Breakpoints.Handset
  ];

  isLoggedIn$ = new BehaviorSubject(false);

  isHandset$ = this.breakpointObserver.observe(this.bps)
    .pipe(
      map(bp => bp.matches),
      shareReplay(1) // share only the last boolean value
    );

  profile$ = new BehaviorSubject<User | undefined>(undefined);

  constructor(private breakpointObserver: BreakpointObserver) { }

  login(user: User): void {
    this.profile$.next(user);
    this.isLoggedIn$.next(true);
  }

  logout(): void {
    this.profile$.next(undefined);
    this.isLoggedIn$.next(false);
  }
}
