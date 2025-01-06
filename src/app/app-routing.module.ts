import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentListComponent } from './componenents/component-list/component-list.component';
import { ComponentDetailComponent } from './componenents/component-detail/component-detail.component';

const routes: Routes = [
  {
  path: '',
  component: ComponentListComponent,
  },
  {
  path: 'home',
  component: ComponentListComponent,
  },
  {
  path: 'detail/:id',
  component: ComponentDetailComponent,
  }, 
  {
  path: '**',
  component: ComponentListComponent,
  }
,];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
