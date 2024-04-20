import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatListComponent } from './components/list/list.component';
import { ChatDetailComponent } from './components/detail/detail.component';
import { ChatFormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', component: ChatListComponent },
  { path: 'detail/:id', component: ChatDetailComponent },
  { path: 'create', title: 'Nouveau chat', component: ChatFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule {}
