import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { SupportModule } from './support/support.module';
import { LegalModule } from './legal/legal.module';
import { GlobalState } from './service/global.state';
import { IntercomModule } from 'ng-intercom';
import { PyxisSplashScreenService } from './service/splash-screen.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    HomeModule,
    AboutModule,
    SupportModule,
    LegalModule,
    IntercomModule.forRoot({
      appId: 'wi9zcd19',
      updateOnRouterChange: true
    })
  ],
  providers: [
    GlobalState,
    PyxisSplashScreenService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
