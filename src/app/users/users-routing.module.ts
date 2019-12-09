import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { AuthGuard } from '../auth/auth.guard';


const usersRoutes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [AuthGuard]
  },
  {
     path: 'user/:id',
     component:  UserDetailComponent,
     canActivate: [AuthGuard]
   }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
