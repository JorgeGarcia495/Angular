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
import { BsModalService, ModalModule, AccordionModule, AlertModule, ButtonsModule, CarouselModule, CollapseModule } from 'ngx-bootstrap';
import { AccordionExampleComponent } from './bootstrap/accordion-example/accordion-example.component';
import { AlertsExampleComponent } from './bootstrap/alerts-example/alerts-example.component';
import { ButtonsComponent } from './bootstrap/buttons/buttons.component';
import { CarouselComponent } from './bootstrap/carousel/carousel.component';
import { CollapseComponent } from './bootstrap/collapse/collapse.component';



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
    CollapseComponent
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
    CollapseModule.forRoot()
  ],
  entryComponents: [DialogoComponent],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
