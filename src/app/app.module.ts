import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeroFormComponent } from './formularios/hero-form/hero-form.component';
import { HeroDetailComponent } from './formularios/hero-detail/hero-detail.component';
import { HeroListComponent } from './formularios/hero-detail/hero-list/hero-list.component';
import { HeroService } from './core/services/hero.service';
import { BsModalService } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroDetailComponent,
    HeroListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
