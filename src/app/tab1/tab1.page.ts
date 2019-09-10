import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  temas = [
    {
      nombre: 'gastronomia',
      image: 'assets/temas/gastronomia.png'
    },
    {
      nombre: 'playas',
      image: 'assets/temas/playas.png'
    },
    {
      nombre: 'tendencias',
      image: 'assets/temas/tendencias.png'
    },
    {
      nombre: 'bares',
      image: 'assets/temas/bares.jfif'
    },
  ];

  gastronomia = [
    {
      nombre: 'Bandeja Paisa',
      origen: 'Medellin',
      image: 'assets/img/plato8.png'
    },
    {
      nombre: 'Ajiaco',
      origen: 'Bogotá',
      image: 'assets/img/ajiaco.png'
    },
    {
      nombre: 'Tamal',
      origen: 'Tolima',
      image: 'assets/img/tamal.png'
    },

  ];
  playas = [
    {
      nombre: 'Playa Blanca',
      lugar: 'Cartagena',
      image: 'assets/img/playablanca.jfif'
    },
    {
      nombre: 'Rodadero',
      lugar: 'Santa Marta',
      image: 'assets/img/rodadero.jfif'
    },
    {
      nombre: 'Bocagrande',
      lugar: 'Cartagena',
      image: 'assets/img/bocagrande.jfif'
    }
  ];
  tendencias = [
    {
      nombre: 'Smartphones',
      descripcion: 'Tecnología',
      image: 'assets/img/smartphones.jfif'
    },
    {
      nombre: 'Video Juegos',
      descripcion: 'Geek',
      image: 'assets/img/lol.jfif'
    },
    {
      nombre: 'Ciclismo',
      descripcion: 'deportes',
      image: 'assets/img/ciclismo.jfif'
    }
  ];
  bares = [
    {
     nombre: 'MORENA ROOFTOP BAR',
     ubicacion: 'Cra 13 # 83-19',
     image: 'assets/img/morena.jpg'
    },
    {
     nombre: 'EL PICÓ',
     ubicacion: 'Avenida 82 # 12A-23',
     image: 'assets/img/elpico.jpeg'
    },
    {
     nombre: 'CASA BIZARRA',
     ubicacion: 'Cra. 5 #70a-7',
     image: 'assets/img/casabizarra.jpg'
    },
  ];

  temaSeleccionado = '';

  mostrartema(tema: string) {
    this.temaSeleccionado = tema;
    console.log(this.temaSeleccionado);
  }
  reiniciartema(tema: string) {
    this.temaSeleccionado = tema;
  }
}
