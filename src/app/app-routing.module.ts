import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { ProfileComponent } from './components/post-login-components/profile/profile.component';
import { MyInfoComponent } from './components/post-login-components/profile/my-info/my-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';



const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'contacts', component: ContactsComponent},
  { path: 'contact/:id', component: ContactComponent},
  { path: 'server', canActivate: [AuthGuard], component: ServerComponent},
  { path: 'my-info', component: ProfileComponent},
  { path: 'page-not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: 'page-not-found'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { 

}