import {HensWorldContent} from "./components/content/HensWorldContent";
import * as React from "react";
import {TheLastFrontierContent} from "./components/content/TheLastFrontierContent";
import {EternityRunContent} from "./components/content/EternityRunContent";
import {WittyfitContent} from "./components/content/WittyfitContent";
import {RefugeContent} from "./components/content/RefugeContent";
import {ReactDOM} from "react";
import {LinkWrapper} from "./components/LinkWrapper";
import {Line} from "./components/Line";

export interface PageDescriptor  {
  color?: string,
  name: string,
  tag: string,
  techs: Array<string>,
  images:Array<string | JSX.Element>,
  viewbox?: [number, number],
  path?: string,
  mobilePath?: string,
  closingPath?: string,
  mobileClosingPath ?: string,
  isPathReversed?: boolean;
}


export interface PageContent {
  excerpt: string;
  contract: string;
  role: Array<string>;
  description: string | Array<string>;
  entreprise: string;
  date: string;
}

export interface FormationContent {
  title: string;
  date: string;
  school: string;
  town: string;
}

const CST = {
  SLIDER_TIMER: 1200
};

const icons: {[s: string]: string} = {
  angular: require('./assets/logos/angular.svg'),
  wordpress: require('./assets/logos/wordpress.svg'),
  coffeescript: require('./assets/logos/coffeescript.svg'),
  nodejs: require('./assets/logos/nodejs.svg'),
  mysql: require('./assets/logos/mysql.svg'),
  less: require('./assets/logos/less.svg'),
  createjs: require('./assets/logos/createjs.svg'),
  css3: require('./assets/logos/css3.svg'),
  react: require('./assets/logos/react.svg'),
  gulp: require('./assets/logos/gulp.svg'),
  sass: require('./assets/logos/sass.svg'),
  typescript: require('./assets/logos/typescript.svg'),
  'socket-io': require('./assets/logos/socket-io.svg'),
  webpack: require('./assets/logos/webpack.svg'),
};

const labels: {[s: string]: string} = {
  angular: "Angular",
  wordpress: "Wordpress",
  coffeescript: "CoffeeScript",
  nodejs: "NodeJS",
  mysql: "MySQL",
  less: "Less",
  createjs: "CreateJS",
  css3: "CSS3",
  react: "React",
  gulp: "Gulp",
  webpack: "Webpack",
  sass: 'Sass',
  typescript: 'TypeScript',
  'socket-io': 'Socket.io'
};

const pContent: {[key: string]: PageContent} = {
  'hens-world':{
    excerpt: "Plateforme Web sur la création et le jeu de rôle",
    contract: 'Association',
    role: ['Web developer full stack', 'Web Designer'],
    description: "Site communautaire et interactif basé autour d'un univers fictif. Le site permet de poster des créations de tous types, naviguer dans différents villages en vue isométrique pour découvrir l’univers, créer son personnage, faire des jeux de rôles avec d’autres joueurs, etc.",
    entreprise: 'Hens World',
    date: 'Mars 2015 - Aujourd\'hui',
  },
  'wittyfit': {
    excerpt: "Outil pour la qualité de vie au travail",
    contract: 'CDD',
    role: ['Web developer front end'],
    description: [
      "Wittyfit est une application à destination des grandes entreprises pour améliorer la qualité de vie au travail de ses employés.",
      "L'outil comprend des questionnaires, des statistiques pour les chefs d'équipes, un board pour proposer des idées anonymement, des formations pour les employés, etc..",
    ],
    entreprise: 'Wittyfit',
    date: 'Novembre 2014 - Mars 2015',
  },
  'the-last-frontier': {
    excerpt: "Companion App pour un jeu en ligne massivement multijoueur",
    contract: 'CDD',
    role: ['Web developer full stack', 'Interactive Designer'],
    description: "Application multi plateformes pour accompagner le MMO The Last Frontier, en cours de développement. L'application permet de gérer son profil, ses véhicules, sa base, ses drones et communiquer avec les autres joueurs.",
    entreprise: 'Asobo',
    date: 'Décembre 2015 - Mai 2017',
  },
  'le-refuge-des-souvenirs':{
    excerpt: "Film Interactif",
    contract: 'perso',
    role: ['Web developer full stack', 'Interactive Designer'],
    description: "Le Refuge des Souvenirs est un film interactif réalisé par Lyne Hehlen en tant que projet de fin d'étude à l'EMCA. Le film permet de suivre l'histoire de deux amies d'enfances aux travers de 3 points de vues différents.",
    entreprise: 'Lyne Hehlen',
    date: 'Mai 2017 - Août 2017',
  },
  'eternity-run': {
    excerpt: "Runner multijoueur en ligne sur navigateur",
    contract: 'Perso',
    role: ['Web developer full stack', 'Game Designer'],
    description: "Jeu développé à l'occasion d'un évènement organisé au sein de la communauté Hens World sur une durée de 72 heures. Le jeu est jouable sur navigateur, il s'agissait avant tout d'un challenge technique sur une courte durée pour appréhender les jeux en ligne en temps réel.",
    entreprise: 'Hens World',
    date: 'Août 2017 - Game Jam',
  }
};

export const overlayContent: {[key :string]: any} = {
  'hens-world': HensWorldContent,
  'the-last-frontier': TheLastFrontierContent,
  'eternity-run': EternityRunContent,
  'wittyfit': WittyfitContent,
  'le-refuge-des-souvenirs': RefugeContent,
};

export const formations: Array<FormationContent> = [
  {
    title: "Licence Pro conception et coordination d’univers vidéoludiques.",
    date: "2013 - 2014",
    school: "Paul Valéry",
    town: "Montpellier"
  },
  {
    title: "BTS Communication visuelle option multimédia.",
    date: "2011 - 2013",
    school: "L.I.S.A",
    town: "Angoulême"
  },
  {
    title: "Mise à Niveau Arts Appliqués",
    date: "2010 - 2011",
    school: "Raymond Loewy",
    town: "La Souterraine"
  },
];

const projects: {
  [s: string]: PageDescriptor
} = {
  'home':{
    name: 'Station',
    tag: 'home',
    viewbox: [100, 100],
    path : "M71,100 c0.166,-0.5 18.083,-16.5 16.5,-49.667 C81.168,18.921 71,0 71,0",
    mobilePath : "M100,71 c-0.5,0.166 -16.5,18.083 -49.667,16.5 C18.921,81.168 0,71 0,71",
    closingPath: "L100,0 L100,100Z",
    mobileClosingPath: "L0,100 L100,100Z",
    isPathReversed: true,
    techs: [],
    images:[
      <div className="presentation">
        <img className="avatar" src={require('./assets/avatar.png')} alt=""/>
        <a className="mail" href="mailto:thibaut.carcenac@gmail.com">thibaut.carcenac@gmail.com</a>
        <p>06.09.66.26.76</p>
        <p>4 rue des tanneries</p>
        <p>16000 Angoulême</p>
        <Line spaceAround={true}>
          <LinkWrapper external={true} link={'https://www.linkedin.com/in/thibaut-carcenac-49b16280/'}>
            <img src={require("./assets/logos/linkedin.svg")} width={"50"} alt="LinkedIn Icon"/>
          </LinkWrapper>
          <LinkWrapper external={true} link={"https://github.com/n-kogo"}>
            <img src={require("./assets/logos/github.svg")} width={"50"} alt="Github Icon"/>
          </LinkWrapper>
          <LinkWrapper external={true} link={require('./assets/CV_Thibaut_CARCENAC.pdf')}>
            <img src={require("./assets/logos/cv.svg")}  width={"50"} alt="Curriculum Vitae"/>
          </LinkWrapper>
        </Line>
      </div>
    ]
  },
  'hens-world':{
    name: 'Hens World',
    tag: 'hens-world',
    techs: ['angular', 'wordpress', 'coffeescript', 'nodejs', 'mysql', 'less', 'gulp'],
    path: 'M71,0 c10,20 20,30 20,50 S70,90 70,100',
    mobilePath: 'M0,71 c20,10 30,20 50,20 S90,70 100,70',
    closingPath: "L100,100 L100,0Z",
    mobileClosingPath: "L100,100 L0,100Z",
    viewbox: [100, 100],
    images:[
      require('./assets/hens-world/1.jpg'),
      require('./assets/hens-world/2.jpg'),
      require('./assets/hens-world/3.jpg'),
      require('./assets/hens-world/4.jpg'),
      require('./assets/hens-world/5.jpg'),
      require('./assets/hens-world/6.jpg'),
    ]
  },
  'wittyfit': {
    name: 'Wittyfit',
    tag: 'wittyfit',
    viewbox: [100, 100],
    // top bubble
    // path: "M60.05,0 c0,0-15.5,17.325-5,33.325S80.266,39.833,82.3,41 s-16.75,59-16.75,59",
    path: "M71,100 c0,0 17,-13.799 18.084,-34.25 C90.5,48.524 71.5,33.5 65.229,31.322 c5.084,-2.444 12.65,-8.156 12.65,-14.813 c0,-8.883 -6.35,-16.084 -11,-18.184",
    mobilePath: 'M100,71 c0,0 -13.799,17 -34.25,18.084 C48.524,90.5 33.5,71.5 31.322,65.229 c-2.444,5.084 -8.156,12.65 -14.813,12.65 c-8.883,0 -16.084,-6.35 -18.184,-11',
    isPathReversed: true,
    closingPath: "L100,0 L100,100Z",
    mobileClosingPath: "L0,100 L100,100Z",
    techs: ['angular', 'coffeescript', 'gulp', 'less'],
    images: [
      require('./assets/wittyfit/1.jpg'),
      require('./assets/wittyfit/2.jpg'),
    ]
  },
  'the-last-frontier': {
    name: 'The Last Frontier',
    viewbox: [100, 100],
    tag: 'the-last-frontier',
    techs: ['angular', 'nodejs', 'socket-io', 'typescript', 'mysql', 'webpack'],
    path: "M71,0 c0,0 -10.802,39 -5.617,72.75  c4.319,28.114 4.38,24.25 5.38,27.25",
    mobilePath: "M0,71 c0,0 39,-10.802 72.75,-5.617  c28.114,4.319 24.25,4.38 27.25,5.38",
    closingPath: "L100,100 L100,0Z",
    mobileClosingPath: "L100,100 L0,100Z",
    images: [
      require('./assets/thelastfrontier/1.jpg'),
      require('./assets/thelastfrontier/2.jpg'),
      require('./assets/thelastfrontier/3.jpg'),
      require('./assets/thelastfrontier/4.jpg'),
      require('./assets/thelastfrontier/5.jpg'),
    ]
  },
  'le-refuge-des-souvenirs': {
    name: 'Le Refuge des Souvenirs',
    tag: 'le-refuge-des-souvenirs',
    viewbox: [100, 100],
    path: 'M71,0 c0,0 -8.52,6.325 -9.878,24.871  c-1.076,14.693 3.505,25.862 9.836,31.232  c6.936,5.883 11.082,5.729 14.411,11.064  c4.722,7.563 -10.351,32.832 -15,32.832',
    mobilePath: 'M0,70 c0,0 6.325,-8.52 24.871,-9.878  c14.693,-1.076 25.862,3.505 31.232,9.836  c5.883, 6.936 5.729,11.082 11.064,14.411  c7.563,4.722 32.832,-10.351 32.832,-15',
    closingPath: "L100,100 L100,0Z",
    mobileClosingPath: "L100,100 L0,100Z",
    techs: ['typescript', 'react', 'nodejs', 'sass', 'mysql', 'webpack'],
    images: [
      require('./assets/le-refuge-des-souvenirs/1.jpg'),
      require('./assets/le-refuge-des-souvenirs/2.jpg'),
      require('./assets/le-refuge-des-souvenirs/3.jpg'),
      require('./assets/le-refuge-des-souvenirs/4.jpg'),
    ]
  },
  'eternity-run': {
    name: 'One Eternity to Run',
    tag: 'eternity-run',
    techs: ['phaser', 'nodejs', 'socket-io', 'webpack', 'sass'],
    path: "M71,0 L71.654,72.25 L58.904,71.75 L68.904,86.75 L57.904,86.5 L71,100",
    mobilePath: "M0,71 L72.25,71.654 L71.75,58.904 L86.75,68.904 L86.5,57.904 L100,71",
    closingPath: "L100,100 L100,0Z",
    mobileClosingPath: "L100,100 L0,100Z",
    viewbox: [100, 100],
    images: [
      require('./assets/eternity-run/1.jpg'),
      require('./assets/eternity-run/2.jpg'),
      require('./assets/eternity-run/3.jpg'),
      require('./assets/eternity-run/4.jpg'),
    ]
  }
};
export {projects, icons, labels, pContent, CST};