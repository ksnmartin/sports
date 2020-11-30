import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(mod => mod.HomeModule)
  },
  {
   path: 'team',
    loadChildren: () => import('./team/team.module')
      .then(mod => mod.TeamModule)
  },
   {
   path: '',
    loadChildren: () => import('./about/about.module')
      .then(mod => mod.AboutModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
