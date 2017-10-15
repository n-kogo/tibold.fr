export interface PageDescriptor  {
  color?: string,
  name: string,
  techs: Array<string>,
  images:Array<string>,
  viewbox?: [number, number],
  path?: string,
  isPathReversed?: boolean;
}


export interface PageContent {
  excerpt: string;
  description: string | Array<string>;
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
  'socket-io': 'Socket.io'
};

const pContent: {[key: string]: PageContent} = {
  'hens-world':{
    excerpt: "Plateforme Web sur la création et le jeu de rôle",
    description: "Site communautaire et interactif basé autour d'un univers fictif. Le site permet de poster des créations de tous types, naviguer dans différents villages en vue isométrique pour découvrir l’univers, créer son personnage, faire des jeux de rôles avec d’autres joueurs, etc.",
    date: 'Mars 2015 - Aujourd\'hui',
  },
  'wittyfit': {
    excerpt: "Outil pour la qualité de vie au travail",
    description: [
      "Wittyfit est une application à destination des grandes entreprises pour améliorer la qualité de vie au travail de ses employés.",
      "L'outil comprend des questionnaires, des statistiques pour les chefs d'équipes, un board pour proposer des idées anonymement, des formations pour les employés, etc..",
    ],
    date: 'Novembre 2014 - Mars 2015',
  },
  'the-last-frontier': {
    excerpt: "Companion App pour un jeu en ligne massivement multijoueur",
    description: "Application multi plateformes pour accompagner le MMO The Last Frontier, en cours de développement. L'application permet de gérer son profil, ses véhicules, sa base, ses drones et communiquer avec les autres joueurs.",
    date: 'Décembre 2015 - Mai 2017',
  },
  'le-refuge-des-souvenirs':{
    excerpt: "Film Interactif",
    description: "",
    date: 'Mai 2017 - Août 2017',
  },
  'eternity-run': {
    excerpt: "Runner multijoueur en ligne sur navigateur",
    description: "Jeu développé à l'occasion d'un évènement organisé au sein de la communauté Hens World sur une durée de 72 heures. Le jeu est jouable sur navigateur, il s'agissait avant tout d'un challenge technique sur une courte durée pour appréhender les jeux en ligne en temps réel.",
    date: 'Août 2017 - Game Jam',
  }
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
    viewbox: [100, 100],
    path : "M71,100c0.166-0.5,18.083-16.5,16.5-49.667C81.168,18.921,72,-1,71,0",
    isPathReversed: true,
    techs: [],
    images:[
      require('./assets/hens-world/1.jpg'),
    ]
  },
  'hens-world':{
    name: 'Hens World',
    techs: ['angular', 'wordpress', 'coffeescript', 'nodejs', 'mysql', 'less', 'gulp'],
    path: 'M0.71,0 c0.1,0.2 0.2,0.3 0.2,0.5 S0.7,0.9 0.7,1',
    viewbox: [1, 1],
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
    viewbox: [100, 100],
    // top bubble
    // path: "M60.05,0 c0,0-15.5,17.325-5,33.325S80.266,39.833,82.3,41 s-16.75,59-16.75,59",
    path: "M71,100 c0,0 17-13.799,18.084-34.25 C90.5,48.524 71.5,33.5 65.229,31.322 c5.084,-2.444 8.65,-8.156 12.65,-14.813 c0-8.883-6.35-16.084-12.182-18.184",
    isPathReversed: true,
    techs: ['angular', 'coffeescript', 'gulp', 'less'],
    images: [
      require('./assets/wittyfit/1.jpg'),
      require('./assets/wittyfit/2.jpg'),
    ]
  },
  'the-last-frontier': {
    name: 'The Last Frontier',
    viewbox: [100, 100],
    techs: ['angular', 'nodejs', 'socket-io', 'typescript', 'mysql', 'webpack'],
    path: "M71,0 c0,0-10.802,39-5.617,72.75  c4.319,28.114,9.938,27.25,9.938,27.25",
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
    viewbox: [100, 100],
    path: 'M71,0 c0,0-8.52,6.325-9.878,24.871  c-1.076,14.693,3.505,25.862,9.836,31.232  c6.936,5.883,11.082,5.729,14.411,11.064  c4.722,7.563-10.351,32.832-10.351,32.832',
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
    techs: ['phaser', 'nodejs', 'socket-io', 'webpack', 'sass'],
    path: "M59.904,0 L71.654,72.25 L58.904,71.75 L68.904,86.75 L57.904,86.5 L66.779,100",
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