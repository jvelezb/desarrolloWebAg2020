import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoAlumnosComponent } from './main-components/listado-alumnos/listado-alumnos.component';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';

import { AuthGuard, AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';


const routes: Routes = [
  { path: '', component: ListadoAlumnosComponent, data:{animation: "HomePage"} },
  {
    path: 'professor',
    loadChildren: './module/professor/professor.module#ProfessorModule',
    data: {
      animation: "ProfessorPage"
    },canActivate:[AuthGuard]
  }, {
    path: 'groups',
    loadChildren: './module/group/group.module#GroupModule',
    data:{animation: "GroupPage"},canActivate:[AuthGuard]
  },
  {
    path: '**', component: PageNotFoundComponent,
    data:{animation: "NotFoundPage"}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,
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
})],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
  ],
})
export class AppRoutingModule { }
