import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { DialogoComponent } from './bootstrap/dialogo/dialogo.component';
import { DireccionComponent } from './bootstrap/direccion/direccion.component';
import { HeroFormComponent } from './formularios/hero-form/hero-form.component';
import { HeroDetailComponent } from './formularios/hero-detail/hero-detail.component';
import { HeroListComponent } from './formularios/hero-detail/hero-list/hero-list.component';
import { AccordionExampleComponent } from './bootstrap/accordion-example/accordion-example.component';
import { AlertsExampleComponent } from './bootstrap/alerts-example/alerts-example.component';
import { ButtonsComponent } from './bootstrap/buttons/buttons.component';
import { CarouselComponent } from 'ngx-bootstrap';
import { CollapseComponent } from './bootstrap/collapse/collapse.component';
import { DatepickerComponent } from './bootstrap/datepicker/datepicker.component';
import { DropdownsComponent } from './bootstrap/dropdowns/dropdowns.component';
import { ModalsComponent } from './bootstrap/modals/modals.component';

const routes: Routes = [
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'direccion', component: DireccionComponent },
    { path: 'heroForm', component: HeroFormComponent },
    { path: 'heroDetail', component: HeroDetailComponent },
    { path: 'heroList', component: HeroListComponent },
    { path: 'accordion', component: AccordionExampleComponent },
    { path: 'alert', component: AlertsExampleComponent },
    { path: 'buttons', component: ButtonsComponent },
    { path: 'carousel', component: CarouselComponent },
    { path: 'collapse', component: CollapseComponent },
    { path: 'datepicker', component: DatepickerComponent },
    { path: 'dropdown', component: DropdownsComponent },
    { path: 'modal', component: ModalsComponent },
    { path: '', children: [], canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
