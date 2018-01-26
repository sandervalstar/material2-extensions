import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public options: string[] = ['Een', 'Een', 'Een', 'Twee', 'Drie'];

  constructor() {
  }

  ngOnInit() {
  }

}
