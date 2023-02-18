import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CyDirective } from './directives/cy.directive';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { SNACKBAR_CONFIG } from './shared/constants';
import { HomeComponent } from './components/home/home.component';
import { WriteDialog } from './dialogs/write/write.dialog';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { DateAgoPipe } from './shared/pipes/date-ago.pipe';
import { PostComponent } from './components/post/post.component';
import { ViewsPipe } from './shared/pipes/views.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CyDirective,
    SidenavComponent,
    LoginComponent,
    HomeComponent,
    WriteDialog,
    FavoritesComponent,
    DateAgoPipe,
    PostComponent,
    ViewsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: SNACKBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
