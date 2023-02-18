import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { fadeIn } from './my-animation';
import { WriteDto } from './shared/dto';
import { HttpService } from './shared/services/http.service';
import { StateService } from './shared/services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn]
})
export class AppComponent {

  title = 'Curiosity';

  isHandset = false;

  isLoggedIn$: Observable<boolean>;

  constructor(
    private state$: StateService,
    private router: Router,
    private http$: HttpService
  ) {
    this.state$.isHandset$.subscribe(v => this.isHandset = v);
    this.isLoggedIn$ = this.state$.isLoggedIn$;
  }

  logout(sidenav: MatSidenav): void {
    this.state$.logout();
    sidenav.close();
    this.router.navigate(['']);
  }

  write(input: WriteDto): void {
    this.http$.writeCuriosity(input).subscribe({
      next: (res) => {
        if (res) {
          this.refreshHome();
        };
      }
    });
  }

  private async refreshHome(): Promise<void> {
    await this.router.navigateByUrl('/', { skipLocationChange: true });
    this.router.navigate(['/home']);
  }

  navChange(sidenav: MatSidenav): void {
    if (this.isHandset) {
      sidenav.close();
    }
  }

}
