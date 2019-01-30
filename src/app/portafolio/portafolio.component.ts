import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  public projects: any[];
  public project: any;

  constructor() {
  }

  ngOnInit() {
    this.project = null;
    this.projects = [{
      id: 'apiNode1',
      name: 'Api Rest con NodeJS & Frontend en Angular',
      technologies: ['MongoDB', 'Express', 'Angular 7', 'NodeJS', 'AWS S3', 'GitHub'],
      img: ['mongodb-logo.png', 'node-logo3.png', 'angular_logo.png', 'node-logo.png', 'aws-logo.png', 'github-logo.png'],
      link: 'http://hospital-admin-app.s3-website-us-east-1.amazonaws.com',
      note: 'Para probar el proyecto haga uso de las credenciales anexadas en el CV',
      gihutb_back: 'https://github.com/Frank712/backend-hospital/',
      gihutb_front: 'https://github.com/Frank712/hospital-app',
      doc_link: 'https://documenter.getpostman.com/view/6192337/RznHJdPb',
      description: 'Este proyecto consiste en un aplicación web para la administración de' +
        ' usuarios, hospitales y doctores. Mediante una interfaz gráfica diseñada originalmente' +
        ' en HTML y CSS y transformada en componentes mediante el empleo de el framework Angular 2.' +
        ' La administración de los usuarios se hace mediante las funciones (CRUD) ofrecidas por backend' +
        ' con la ayuda del gestor de base de datos'
    }, {
      id: 'apiSpring',
      name: 'Api Rest con Spring 5 & Frontend en Angular',
      technologies: ['Spring 5', 'Bootstrap', 'Angular 7', 'MongoDB', 'AWS S3', 'GitHub'],
      img: ['spring-logo.png', 'bootstrap.png', 'angular_logo.png', 'mongodb-logo.png', 'aws-logo.png', 'github-logo.png'],
      link: '',
      gihutb_back: 'https://github.com/Frank712/backend-facturation',
      gihutb_front: 'https://github.com/Frank712/frontend-facturation',
      doc_link: 'https://documenter.getpostman.com/view/6192337/RztivWmq',
      description: 'Este proyecto consiste en un aplicación web para la administración de' +
        ' usuarios por region. Lo anterior se hace mediante una interfaz gráfica diseñada desde cero' +
        ' en HTML y CSS basada en componentes mediante el empleo de el framework Angular 2.' +
        ' La funciones de persistencia (CRUD) se desarrollaron con la ayuda del framework de Java Spring 5, ' +
        ' y el gestor de base de datos MongoDB. Para más información consulte los enlaces abajo descritos.'
    }, {
      id: 'apiNode2',
      name: 'RestServer NodeJS',
      technologies: ['NodeJS', 'Express', 'MongoDB', 'GitHub', 'Heroku'],
      img: ['node-logo.png', 'node-logo3.png', 'mongodb-logo.png', 'github-logo.png', 'heroku-logo.png'],
      link: 'https://gentle-tor-50074.herokuapp.com/',
      gihutb_back: 'https://github.com/Frank712/node-restserver',
      gihutb_front: '',
      doc_link: 'https://documenter.getpostman.com/view/6192337/RzfnknFq',
      description: 'Este proyecto consiste en una API REST para la administración de' +
        ' usuarios, productos y categorías. ' +
        ' La funciones de persistencia (CRUD) se desarrollaron empleando NodeJS, la infraestructura web Express ' +
        ' y el gestor de base de datos MongoDB. Para más información sobre los servicios ofrecidos por esta API, así como ' +
        'la documentación de los mismo, puede consultar los enlaces de la parte inferior.  '
    }, {
      id: 'tickets',
      name: 'Generador de tickets',
      technologies: ['NodeJS', 'Express', 'Socket.io', 'GitHub', 'Heroku'],
      img: ['node-logo.png', 'node-logo3.png', 'socketio-logo.png', 'github-logo.png', 'heroku-logo.png'],
      link: 'https://tickets-sockets-frank.herokuapp.com/',
      gihutb_back: '',
      gihutb_front: 'https://github.com/Frank712/tickets-app',
      doc_link: '',
      description: 'Este proyecto consiste en un pequeño sistema web que genera tickets de manera manual' +
        ' A la vez que administra la atención de los mismos mediante diversos escritorios y muestra en un' +
        ' panel qué escritorio atiende a qué ticket y cuántos hay en la cola. Se hizo uso de sockets, además de' +
        ' las tecnologías como NodeJS y Express.'
    }, {
      id: 'gallery',
      name: 'Gallery Page',
      technologies: ['HTML', 'CSS3', 'JQuery', 'JavaScript', 'AWS', 'GitHub'],
      img: ['html_logo.png', 'css3-logo.png', 'jquery-logo.png', 'javascript-logo.png', 'aws-logo.png', 'github-logo.png'],
      link: 'http://single-page-gallery.s3-website-us-east-1.amazonaws.com',
      gihutb_back: '',
      gihutb_front: 'https://github.com/Frank712/photos_gallery',
      doc_link: '',
      description: 'Este proyecto consiste en una pagina web de una sola página' +
        ' para promocionar un los servicios ofrecidos por una empresa dedicada a la edición y fotografía.' +
        ' Creada con HTML, CSS3 y algunas animaciones con JS y Jquery. '
    }, {
      id: 'predictor',
      name: 'IA: Predictor de Acciones',
      technologies: ['Python', 'TensorFlow', 'Keras', 'GitHub'],
      img: ['python-logo.png', 'tensorflow-logo2.png', 'keras-logo.jpg', 'github-logo.png'],
      link: '',
      gihutb_back: 'https://github.com/Frank712/prediction-of-prices-rnn',
      gihutb_front: '',
      doc_link: '',
      description: 'Este proyecto consiste en la implementación de un Red Neuronal Recurrente con el objetivo de, ' +
        ' dado un conjunto de datos historicos, predecir el comportamiento de las acciones en el futuro (En este caso se emplean un' +
        ' conjunto de datos ficticio sobre la acciones de Google). Se empleo la' +
        ' biblioteca de código abierto Keras, escrita en Python, así como TensorFlow para ejecutarla y Python como lenguaje' +
        ' programación. '
    }];
  }

  showProject(position: number) {
    this.project = this.projects[position];
  }

}
