import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TimepickerComponent, PaginationComponent } from 'ngx-bootstrap';
import { PopoverComponent } from './popover/popover.component';
import { ModalsComponent } from './modals/modals.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { AlertsExampleComponent } from './alerts-example/alerts-example.component';
import { AccordionExampleComponent } from './accordion-example/accordion-example.component';
import { DireccionComponent } from './direccion/direccion.component';

const routes: Routes = [
    { path: 'direccion', component: DireccionComponent },
    { path: 'accordion', component: AccordionExampleComponent },
    { path: 'alert', component: AlertsExampleComponent },
    { path: 'buttons', component: ButtonsComponent },
    { path: 'carousel', component: CarouselComponent },
    { path: 'collapse', component: CollapseComponent },
    { path: 'datepicker', component: DatepickerComponent },
    { path: 'dropdown', component: DropdownsComponent },
    { path: 'modal', component: ModalsComponent },
    { path: 'pagination', component: PaginationComponent },
    { path: 'popover', component: PopoverComponent },
    { path: 'time', component: TimepickerComponent },
    { path: 'tooltip', component: TooltipComponent },
    { path: '', component: AlertsExampleComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
