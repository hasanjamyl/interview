import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { ShowComponent } from './panel/show/show.component';
import { AddEditComponent } from './panel/add-edit/add-edit.component';
import { MemberComponent } from './member/member.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './member/view/view.component';
import { SettingComponent } from './member/setting/setting.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    ShowComponent,
    AddEditComponent,
    MemberComponent,
    ViewComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
