import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllchatsComponent } from './allchats/allchats.component';

const routes: Routes = [
  {path:'allChats',component:AllchatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
export const routingComponents=[AllchatsComponent]
