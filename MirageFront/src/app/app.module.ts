import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './features/application/application.component';
import { AppMenuComponent } from './features/app-menu/app-menu.component';
import { MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbsComponent } from './features/breadcrumbs/breadcrumbs.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { MegaMenuComponent } from './features/mega-menu/mega-menu.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { PannelMenuComponent } from './features/pannel-menu/pannel-menu.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    AppMenuComponent,
    BreadcrumbsComponent,
    MegaMenuComponent,
    PannelMenuComponent,
    Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    MegaMenuModule,
    PanelMenuModule,
    ToggleButtonModule
   

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
