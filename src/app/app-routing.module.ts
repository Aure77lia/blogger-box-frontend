import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './components/connection/connection.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: PostListComponent},
  {path:'users', component:UsersListComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'connection', component: ConnectionComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
