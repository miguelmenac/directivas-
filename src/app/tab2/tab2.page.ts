import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}


  titulo = 'Lugares turísticos';
  lugares = [
    {
      nombre: 'Caño Cristales',
      departamento: 'Meta',
      descripcion: 'Ha sido denominado «el río de los dioses», «el río de los siete colores», «el arco iris que se derritió» e incluso «el río más hermoso del mundo»1​ ya que en su fondo se reproducen plantas acuáticas que con la exposición al sol cambian sus colores en un proceso que va desde el verde hasta un rojo intenso, lo que produce la sensación de estar frente a un río de seis colores: rojo, amarillo, verde , negro , azul y rosado principalmente.',
      image: 'assets/img/caño_cristales.jpg'
    },
    {
      nombre: 'Desierto de la Tatacoa',
      departamento: 'Huila',
      descripcion: 'Es la segunda zona árida más extensa de Colombia después de la península de La Guajira, es uno de los escenarios naturales más atractivos de Colombia, de tierra de color ocre y gris con pincelazos del verde de los cactus. El Desierto de la Tatacoa tiene dos colores característicos: ocre en el sector del Cuzco y gris en la zona de Los Hoyos.',
      image: 'assets/img/desierto_tatacoa.jpg'
    },
    {
      nombre: 'Sierra Nevada',
      departamento: 'Guajira-Magdalena',
      descripcion: 'es un sistema montañoso litoral; ubicado al norte de Colombia que constituye por sí mismo un sistema aislado de Los Andes, sobre la costa Caribe de Colombia. Esta se eleva abruptamente desde las costas del Mar Caribe hasta alcanzar picos nevados a una altura de 5.775 msnm, si bien datos provistos por la misión SRTM señalan una altitud menor, cercana a los 5.700 msnm.',
      image: 'assets/img/sierra_nevada.jfif'
    },
    {
      nombre: 'Cartagena de Indias',
      departamento: 'Bolivar',
      descripcion: ' oficialmente Distrito Turístico y Cultural de Cartagena de Indias abreviado Cartagena de Indias, D. T. y C., es la capital del departamento de Bolívar, al norte de Colombia.7​ Fue fundada el 1.° de junio de 1533 por Pedro de Heredia.8​ Desde 1991 Cartagena es un Distrito Turístico y Cultural.9​ La ciudad está localizada a orillas del mar Caribe',
      image: 'assets/img/ciudad_amurallada.jfif'
    },
    {
      nombre: 'Monserrate',
      departamento: 'Bogotá',
      descripcion: 'El cerro de Monserrate es el más conocido de los cerros Orientales de Bogotá. Junto a Guadalupe es uno de los cerros titulares de la ciudad. Monserrate tiene una altitud de 3152 m y se ubica sobre la cordillera oriental.1​Los cerros de Bogotá, de origen sedimentario, tienen por lo menos 16 millones de años de antigüedad, con rocas de edad cretácica pertenecientes al Grupo guadalupe, en lo que se refiere al aspecto geológico.',
      image: 'assets/img/monserrate.jfif'
    },
  ];
}
