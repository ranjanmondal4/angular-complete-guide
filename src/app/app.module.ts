import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { ProfileComponent } from './components/post-login-components/profile/profile.component';
import { MyInfoComponent } from './components/post-login-components/profile/my-info/my-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    PersonComponent,
    HomeComponent,
    ContactsComponent,
    ContactComponent,
    ProfileComponent,
    MyInfoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
