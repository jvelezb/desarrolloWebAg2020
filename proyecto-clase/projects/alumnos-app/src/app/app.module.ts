import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './main-components/encabezado/encabezado.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { ListadoAlumnosComponent } from './main-components/listado-alumnos/listado-alumnos.component';
import { TitulosComponent } from './main-components/titulos/titulos.component';

import { GroupModule } from './module/group/group.module';
import { ProfessorModule } from './module/professor/professor.module';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';
import { EncabezadoLogeadoComponent } from './main-components/encabezado-logeado/encabezado-logeado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './main-components/login-button/login-button.component';
import { RegistroComponent } from './main-components/registro/registro.component';
import { LogoutButtonComponent } from './main-components/logout-button/logout-button.component';
import { ProfileComponent } from './main-components/profile/profile.component';

import { StorageServiceModule } from 'ngx-webstorage-service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent, EncabezadoComponent, FooterComponent, ListadoAlumnosComponent, TitulosComponent, PageNotFoundComponent, EncabezadoLogeadoComponent, LoginButtonComponent, RegistroComponent, LogoutButtonComponent, ProfileComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    GroupModule,
    ProfessorModule,
    StorageServiceModule,
    HttpClientModule,
    AuthModule.forRoot({
  // The domain and clientId were configured in the previous chapter
  domain: 'dev-qz51ohsc.auth0.com',
  clientId: 'jyPQwC4p9HUwegnIqJsL2JaXKfNbkb7U',

  // Request this audience at user authentication time
  audience: 'https://dev-qz51ohsc.auth0.com/api/v2/',

  // Request this scope at user authentication time
  scope: 'read:current_user',

  // Specify configuration for the interceptor
  httpInterceptor: {
    allowedList: [
      {
        // Match any request that starts 'https://dev-qz51ohsc.auth0.com/api/v2/' (note the asterisk)
        uri: 'https://dev-qz51ohsc.auth0.com/api/v2/*',
        tokenOptions: {
          // The attached token should target this audience
          audience: 'https://dev-qz51ohsc.auth0.com/api/v2/',

          // The attached token should have these scopes
          scope: 'read:current_user'
        }
      }
    ]
  }
}),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
