export interface PageDescriptor  {
  color?: string,
  name: string,
  techs: Array<string>,
  images:Array<string>
}


export interface PageContent {
  excerpt: string;
  description: string;
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
  'socket-io': require('./assets/logos/socket-io.svg')
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
    excerpt: "Plateforme Web sur la création et le jeu de rôle",
    description: `
      Wittyfit est une application à destination des grandes entreprises pour améliorer la qualité de vie au travail de ses employés.
      <br/>
      L'outil comprend des questionnaires, des statistiques pour les chefs d'équipes, un board pour proposer des idées anonymement, des formations pour les employés, etc..
     `,
    date: 'Mars 2015 - Aujourd\'hui',
  },
  'the-last-frontier': {
    excerpt: "Plateforme Web sur la création et le jeu de rôle",
    description: "Site communautaire et interactif basé autour d'un univers fictif. Le site permet de poster des créations de tous types, naviguer dans différents villages en vue isométrique pour découvrir l’univers, créer son personnage, faire des jeux de rôles avec d’autres joueurs, etc.",
    date: 'Mars 2015 - Aujourd\'hui',
  },
  'le-refuge-des-souvenirs':{
    excerpt: "Plateforme Web sur la création et le jeu de rôle",
    description: "Site communautaire et interactif basé autour d'un univers fictif. Le site permet de poster des créations de tous types, naviguer dans différents villages en vue isométrique pour découvrir l’univers, créer son personnage, faire des jeux de rôles avec d’autres joueurs, etc.",
    date: 'Mars 2015 - Aujourd\'hui',
  },
  'eternity-run': {
    excerpt: "Plateforme Web sur la création et le jeu de rôle",
    description: "Site communautaire et interactif basé autour d'un univers fictif. Le site permet de poster des créations de tous types, naviguer dans différents villages en vue isométrique pour découvrir l’univers, créer son personnage, faire des jeux de rôles avec d’autres joueurs, etc.",
    date: 'Mars 2015 - Aujourd\'hui',
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
  'hens-world':{
    name: 'Hens World',
    techs: ['angular', 'wordpress', 'coffeescript', 'nodejs', 'mysql', 'less', 'gulp'],
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
    techs: ['angular', 'coffeescript', 'gulp', 'less'],
    images: [
      require('./assets/wittyfit/1.jpg'),
      require('./assets/wittyfit/2.jpg'),
    ]
  },
  'the-last-frontier': {
    name: 'The Last Frontier',
    techs: ['angular', 'nodejs', 'socket-io', 'typescript', 'mySQL', 'webpack'],
    images: [
      require('./assets/le-refuge-des-souvenirs/1.jpg'),
      require('./assets/le-refuge-des-souvenirs/2.jpg'),
      require('./assets/le-refuge-des-souvenirs/3.jpg'),
      require('./assets/le-refuge-des-souvenirs/4.jpg'),
    ]
  },
  'le-refuge-des-souvenirs': {
    name: 'Le Refuge des Souvenirs',
    techs: ['typescript', 'react', 'nodejs', 'sass', 'mySQL', 'webpack'],
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
    images: [
      require('./assets/le-refuge-des-souvenirs/1.jpg'),
      require('./assets/le-refuge-des-souvenirs/2.jpg'),
      require('./assets/le-refuge-des-souvenirs/3.jpg'),
      require('./assets/le-refuge-des-souvenirs/4.jpg'),
    ]
  }
};
export {projects, icons, labels, pContent, CST};