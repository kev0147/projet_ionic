import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SemesterComponent } from './semester/semester.component';
import { MarkComponent } from './mark/mark.component';

const routes: Routes = [
  {
    path: 'home',
    component: HeaderComponent,
  },
  {
    path: 'semester/:id',
    component: SemesterComponent,
  },
  {
    path: 'mark/:id',
    component: MarkComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
