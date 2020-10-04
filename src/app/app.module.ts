import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FullComponent } from './layouts/full/full.component';
import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserSaveComponent } from './users/user-save/user-save.component';
import { UserService } from './users/services/user.service';
// import { CompaniesComponent } from './companies/companies.component';
// import { CompanySaveComponent } from './companies/company-save/company-save.component';

@NgModule({
	declarations: [
		AppComponent,
		SpinnerComponent,
		// FullComponent,
		NavigationComponent,
		BreadcrumbComponent,
		SidebarComponent,
		HomeComponent,
		UsersComponent,
		UserSaveComponent,
		// CompaniesComponent,
		// CompanySaveComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		NgbModule,
		RouterModule.forRoot(Approutes, { useHash: false })
	],
	providers: [
		UserService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
