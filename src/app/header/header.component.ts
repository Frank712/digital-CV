import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentDate;

  constructor() {
    this.currentDate = new Date().toLocaleDateString();
  }

  ngOnInit() {
    this.currentDate = new Date().toLocaleDateString();
  }

}
