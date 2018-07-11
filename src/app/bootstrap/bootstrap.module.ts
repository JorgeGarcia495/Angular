import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AccordionModule, AlertModule, ModalModule, ButtonsModule, CarouselModule, CollapseModule, BsDatepickerModule,
  BsDropdownModule, PaginationModule, PopoverModule, TooltipModule, TimepickerModule, BsModalService
} from 'ngx-bootstrap';
import { DialogoComponent } from './dialogo/dialogo.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { DireccionComponent } from './direccion/direccion.component';
import { AccordionExampleComponent } from './accordion-example/accordion-example.component';
import { AlertsExampleComponent } from './alerts-example/alerts-example.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ModalsComponent } from './modals/modals.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { PopoverComponent } from './popover/popover.component';
import { AppComponent } from '../app.component';
import { HeroFormComponent } from '../formularios/hero-form/hero-form.component';
import { routing } from './bootstrap-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot()
  ],
  entryComponents: [DialogoComponent],
  declarations: [DialogoComponent,
    DireccionComponent,
    AccordionExampleComponent,
    AlertsExampleComponent,
    ButtonsComponent,
    CarouselComponent,
    CollapseComponent,
    DatepickerComponent,
    DropdownsComponent,
    ModalsComponent,
    PaginationComponent,
    TimepickerComponent,
    TooltipComponent,
    PopoverComponent],
  providers: [BsModalService]
})
export class BootstrapModule { }
