import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PanelComponent } from './panel/panel.component';
import { MemberComponent } from './member/member.component';


const routes: Routes = [
  {path:'panel', component: PanelComponent},
  {path:'member', component: MemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
