import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PannelItems } from './pannel-Items';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-pannel-menu',
  templateUrl: './pannel-menu.component.html',
  styleUrls: ['./pannel-menu.component.scss'],
})
export class PannelMenuComponent implements OnInit {
  items: MenuItem[];
  checked2: boolean = true;
  name = 'Max';
  constructor() {
    this.items = [];
    // this.checked2= false;
  }

  ngOnInit() {
    this.items = PannelItems;
  }
  // handleChange(e: any) {
  //   this.checked2 = e.checked;
  // }
}
