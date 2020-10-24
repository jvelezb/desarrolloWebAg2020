import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoAlumnosComponent } from './main-components/listado-alumnos/listado-alumnos.component';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', component: ListadoAlumnosComponent, data:{animation: "HomePage"} },
  {
    path: 'professor',
    loadChildren: './module/professor/professor.module#ProfessorModule',
    data:{animation: "ProfessorPage"}
  }, {
    path: 'groups',
    loadChildren: './module/group/group.module#GroupModule',
    data:{animation: "GroupPage"}
  },
  {
    path: '**', component: PageNotFoundComponent,
    data:{animation: "NotFoundPage"}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
