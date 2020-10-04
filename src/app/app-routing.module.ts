import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserSaveComponent } from './users/user-save/user-save.component';

export const Approutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'users/user-save', component: UserSaveComponent },
	{ path: 'users/user-save/:id', component: UserSaveComponent }
	// {
	// 	path: '',
	// 	component: FullComponent,
	// 	children: [
	// 		{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	// 		{
	// 			path: 'dashboard',
	// 			loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
	// 		},
	// 		{
	// 			path: 'component',
	// 			loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
	// 		}
	// 	]
	// },
	// {
	// 	path: '**',
	// 	redirectTo: '/dashboard'
	// }
];
