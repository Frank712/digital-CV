import { Component, OnInit } from '@angular/core';
import {PortafolioComponent} from '../portafolio/portafolio.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isProject: any;

  constructor( private portafolioComponent: PortafolioComponent ) { }

  ngOnInit() {
    this.isProject = this.portafolioComponent.project;
  }

}
