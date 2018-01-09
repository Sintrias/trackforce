///
//  DEPENDENCIES
///

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
///
//  COMPONENTS
///

import { AppComponent } from './app.component';
import { AssociateListComponent } from './components/associate-list/associate-list.component';
import { BatchListComponent } from './components/batch-list/batch-list.component';
import { ClientMappedComponent } from './components/client-mapped/client-mapped.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
import { ClientListComponent } from './components/client-list/client-list.component';

///
//  SERVICES
///

import { AssociateService } from './services/associates-service/associates-service';
import { ClientService } from './services/clients-service/clients-service';
import { ClientMappedService } from './services/client-mapped-service/client-mapped-service.service';

///
//  CONSTANTS
///

import { appRoutes } from './routing/routes';



@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    LoginComponent,
    AssociateListComponent,
    BatchListComponent,
    ClientMappedComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AssociateService, ClientService, ClientMappedService],
  bootstrap: [AppComponent]
})
export class AppModule { }