import { Routes } from '@angular/router'
import { DashboardComponent } from './framework/components/dashboard/dashboard.component'
import { PageNotFoundComponent } from './framework/components/page-not-found/page-not-found.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      /*{
        path: 'users',
        component: UserViewComponent
      },
      {
        path: 'users/new',
        component: UserCreateComponent
      },
      {
        path: 'users/:id',
        component: UserEditComponent
      },*/
    ]
  }
]
