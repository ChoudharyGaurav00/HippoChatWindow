import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatwindowComponent } from './chatwindow/chatwindow.component';
import { AllchatsComponent } from './allchats/allchats.component';
import { ChatwindowheaderComponent } from './chatwindowheader/chatwindowheader.component';
import { ChatwindowmsgComponent } from './chatwindowmsg/chatwindowmsg.component';
import { ChatwindowcontentComponent } from './chatwindowcontent/chatwindowcontent.component';
// import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ChatwindowComponent,
    AllchatsComponent,
    ChatwindowheaderComponent,
    ChatwindowmsgComponent,
    ChatwindowcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
