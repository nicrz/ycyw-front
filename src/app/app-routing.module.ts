import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChatListComponent } from './features/articles/components/list/list.component';
import { ChatDetailComponent } from './features/articles/components/detail/detail.component';
import { ChatFormComponent } from './features/articles/components/form/form.component';
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [UnauthGuard],
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'chats',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ChatDetailComponent },
      { path: 'create', component: ChatFormComponent },
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
