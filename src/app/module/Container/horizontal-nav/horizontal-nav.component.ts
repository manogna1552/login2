import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-nav',
  templateUrl: './horizontal-nav.component.html',
  styleUrls: ['./horizontal-nav.component.css']
})
export class HorizontalNavComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
