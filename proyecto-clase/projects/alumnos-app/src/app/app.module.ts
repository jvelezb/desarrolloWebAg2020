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

@NgModule({
  declarations: [AppComponent, EncabezadoComponent, FooterComponent, ListadoAlumnosComponent, TitulosComponent, PageNotFoundComponent, EncabezadoLogeadoComponent, LoginButtonComponent, RegistroComponent, LogoutButtonComponent, ProfileComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    GroupModule,
    ProfessorModule,
    AuthModule.forRoot({ ...env.auth })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
