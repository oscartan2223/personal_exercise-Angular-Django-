import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ShowUserComponent } from './user/show-user/show-user.component';
import { AddEditUserComponent } from './user/add-edit-user/add-edit-user.component';
import { ContactComponent } from './contact/contact.component';
import { ShowConComponent } from './contact/show-con/show-con.component';
import { AddEditConComponent } from './contact/add-edit-con/add-edit-con.component';
import{SharedService} from './shared.service';

import{HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShowUserComponent,
    AddEditUserComponent,
    ContactComponent,
    ShowConComponent,
    AddEditConComponent
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
