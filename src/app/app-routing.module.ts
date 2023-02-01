import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllchatsComponent } from './allchats/allchats.component';
import { ChatwindowcontentComponent } from './chatwindowcontent/chatwindowcontent.component';
import { UserchatComponent } from './userchat/userchat.component';

const routes: Routes = [
  {path:'chatwindowcontent/:id',component:ChatwindowcontentComponent}
  // {path:'allChats',component:AllchatsComponent},
  // {path:'allChats/:id',component: AllchatsComponent},
  // {path:'**',component:UserchatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[AllchatsComponent,ChatwindowcontentComponent]
