import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  public projects: any[];

  constructor() {
    this.projects = [{
      name: 'Api Rest con NodeJS & Frontend en Angular',
      technologies: ['MongoDB', 'Express', 'Angular 7', 'NodeJS', 'AWS S3', 'GitHub'],
      img: ['mongodb-logo.png', 'node-logo3.png', 'angular_logo.png', 'node-logo.png', 'aws-logo.png', 'github-logo.png'],
      link: 'http:myWebSite.com',
      gihutb_back: 'https://github.com/Frank712/backend-hospital/',
      gihutb_front: 'https://github.com/Frank712/hospital-app',
      doc_link: 'https://documenter.getpostman.com/view/6192337/RznHJdPb',
      description: 'Este proyecto consiste en un aplicación web para la administración de' +
        ' usuarios, hospitales y doctores. Mediante una interfaz gráfica diseñada originalmente' +
        ' en HTML y CSS y transformada en componentes mediante el empleo de el framework Angular 2.' +
        ' La administración de los usuarios se hace mediante las funciones (CRUD) ofrecidas por backend' +
        ' con la ayuda del gestor de base de datos'
    }, {
      name: 'Api Rest con Spring 5 y& Frontend en Angular',
      technologies: ['Spring 5', 'Bootstrap', 'Angular 7', 'MongoDB', 'AWS S3', 'GitHub'],
      img: ['spring-logo.png', 'bootstrap.png', 'angular_logo.png', 'mongodb-logo.png', 'aws-logo.png', 'github-logo.png'],
      link: 'http:myWebSite.com',
      gihutb_back: 'https://github.com/Frank712/backend-facturation',
      gihutb_front: 'https://github.com/Frank712/frontend-facturation',
      doc_link: 'https://documenter.getpostman.com/view/6192337/RztivWmq',
      description: 'Este proyecto consiste en un aplicación web para la administración de' +
        ' usuarios por region. Lo anterior se hace mediante una interfaz gráfica diseñada desde cero' +
        ' en HTML y CSS basada en componentes mediante el empleo de el framework Angular 2.' +
        ' La funciones de persistencia (CRUD) se desarrollaron con la ayuda del framework de Java Spring 5, ' +
        ' y el gestor de base de datos MongoDB'
    }];
  }

  ngOnInit() {
  }

}
