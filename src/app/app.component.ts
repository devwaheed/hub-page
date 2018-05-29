import { Component } from '@angular/core';

declare var $;





@Component({
  selector: 'sx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public show: any = '';
  title = 'sx';

  date = new Date();

  constructor() {
    this.name();
  }

  name() {
    console.log();
  }
}
