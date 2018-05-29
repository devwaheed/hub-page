import { Component, OnInit, Input } from '@angular/core';
import { Log } from '../decorators';

@Component({
  selector: 'sx-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  @Log()
  public name = 'fgsdfgdsfg';

  constructor() { }

  ngOnInit() {
    console.log('great');
  }

}
