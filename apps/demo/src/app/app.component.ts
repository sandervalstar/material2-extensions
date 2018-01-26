import { Component, OnInit, ViewChild } from '@angular/core';
import { ɵTabsComponent as TabsComponent } from 'ngx-tabs-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(TabsComponent) tabs: TabsComponent;

  public options: string[] = ['Een', 'Een', 'Een', 'Twee', 'Drie'];

  constructor() {
  }

  ngOnInit() {
    console.log(this.tabs);
  }

}
