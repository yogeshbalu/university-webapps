import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import  {WarningComponent} from './warning-alert/warning.component';
import  {SuccessAlertComponent} from './sucess-alert/sucessalert.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // to enable ngModel which is being used for two way bindings.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
