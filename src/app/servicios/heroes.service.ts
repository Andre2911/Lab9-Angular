
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes:Heroe[] = [
    {
      nombre: "Apex",
      bio: "Apex es un juego Online donde debe sobrevivir el mejor jugador",
      img: "https://images-na.ssl-images-amazon.com/images/I/81-9oD21IZL.jpg",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "GTA V",
      bio: "GTA V es un juego de tercera persona que es muy divertido.",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202101/2019/JdvqcPlTYMxXrA1QQJm6TbDX.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Outlast",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..",
      img: "https://cdn1.epicgames.com/6504cc61472e498796e0b4963a201438/offer/EGS_TheOutlastTrials_RedBarrels_S2-1200x1600-c70676de7925195513fa7bc4bc2f1d9b.jpg",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Rocket League",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://rocketleague.media.zestyio.com/rl_platform_keyart_2019.f1cb27a519bdb5b6ed34049a5b86e317.jpg",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Pubg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://cdn.andro4all.com/files/2017/12/PUBG-en-Android.jpg",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "The Forest",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://media.vandal.net/i/960x720/4-2018/201841318231_1.jpg",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Geometry Dash",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://play-lh.googleusercontent.com/ejbcfd31sYjE7634xrKS91zDSC8IYHauzZvxBtGSvk8Y-eoNopwOjA3Au-Ok1dGtecA",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getHeroes():Heroe[]{
    return this.heroes;
  }

  getHeroe( idx: any ){
    return this.heroes[idx];
  }

  buscarHeroes( termino:string ):Heroe[]{

    let heroesArr:Heroe[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.heroes.length; i ++ ){

      let heroe = this.heroes[i];

      let nombre = heroe.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        heroe.idx = i;
        heroesArr.push( heroe )
      }

    }

    return heroesArr;

  }


}


export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
};
