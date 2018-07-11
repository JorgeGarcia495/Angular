import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/services/auth-guard.service';
import { HeroFormComponent } from './formularios/hero-form/hero-form.component';
import { HeroDetailComponent } from './formularios/hero-detail/hero-detail.component';
import { HeroListComponent } from './formularios/hero-detail/hero-list/hero-list.component';

const routes: Routes = [
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'bootstrap', loadChildren: './bootstrap/bootstrap.module#BootstrapModule' },
    { path: 'heroForm', component: HeroFormComponent },
    { path: 'heroDetail', component: HeroDetailComponent },
    { path: 'heroList', component: HeroListComponent },
    { path: '', children: [], canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
