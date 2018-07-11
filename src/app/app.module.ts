import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DialogoComponent } from './bootstrap/dialogo/dialogo.component';
import { DireccionComponent } from './bootstrap/direccion/direccion.component';
import { CoreModule } from './core/core.module';
import { HeroFormComponent } from './formularios/hero-form/hero-form.component';
import { HeroDetailComponent } from './formularios/hero-detail/hero-detail.component';
import { HeroListComponent } from './formularios/hero-detail/hero-list/hero-list.component';
import { HeroService } from './core/services/hero.service';
import {
  BsModalService, ModalModule, AccordionModule, AlertModule, ButtonsModule, CarouselModule, CollapseModule,
  BsDatepickerModule, BsDropdownModule, PaginationModule, TimepickerModule, TooltipModule, PopoverModule
} from 'ngx-bootstrap';
import { AccordionExampleComponent } from './bootstrap/accordion-example/accordion-example.component';
import { AlertsExampleComponent } from './bootstrap/alerts-example/alerts-example.component';
import { ButtonsComponent } from './bootstrap/buttons/buttons.component';
import { CarouselComponent } from './bootstrap/carousel/carousel.component';
import { CollapseComponent } from './bootstrap/collapse/collapse.component';
import { DatepickerComponent } from './bootstrap/datepicker/datepicker.component';
import { DropdownsComponent } from './bootstrap/dropdowns/dropdowns.component';
import { ModalsComponent } from './bootstrap/modals/modals.component';
import { PaginationComponent } from './bootstrap/pagination/pagination.component';
import { TimepickerComponent } from './bootstrap/timepicker/timepicker.component';
import { TooltipComponent } from './bootstrap/tooltip/tooltip.component';
import { PopoverComponent } from './bootstrap/popover/popover.component';



@NgModule({
  declarations: [
    AppComponent,
    DialogoComponent,
    DireccionComponent,
    HeroFormComponent,
    HeroDetailComponent,
    HeroListComponent,
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
    PopoverComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
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
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
