import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api'; 

import { ApplicationComponent } from '../application/application.component';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
  public items: MenuItem[];
  constructor() {this.items=[]}

 

  ngOnInit() {
      this.items = [{
          label: '<h2>File</h2>',
          escape: false,
          items: [
              {label: 'New', icon: 'pi pi-plus', url: 'http://www.primefaces.org/primeng'},
              {label: 'Do Something', icon: 'pi pi-download', command: (event) => {}},
              {label: 'Open', icon: 'pi pi-download', routerLink: ['/pagename']},
              {label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
          ]
      },
      {
          label: 'Edit',
          items: [
              {label: 'Undo', icon: 'pi pi-refresh'},
              {label: 'Redo', icon: 'pi pi-repeat'}
          ]
      }];
  }
}
