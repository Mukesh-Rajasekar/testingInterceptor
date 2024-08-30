import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { RestaurantServiceService } from './restaurant-service.service';
import { RouterModule} from '@angular/router';
import { SearchComponent } from './search/search.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './user.service';
import { DummyComponent } from './dummy/dummy.component';
import { authInterceptorInterceptor } from './auth-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    SignupComponent,
    RestaurantCardComponent,
    SearchComponent,
    RestaurantDetailComponent,
    LoginComponent,
    DummyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideClientHydration(),
  provideAnimationsAsync(),
  provideHttpClient(withFetch()),
  // RestaurantServiceService,
  UserService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: authInterceptorInterceptor,
    multi: true}
  ],
  

  
  bootstrap: [AppComponent]
})
export class AppModule { }
