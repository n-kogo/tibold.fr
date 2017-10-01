export interface PageDescriptor  {
  color?: string,
  techs: Array<string>,
  images:Array<string>
}

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
  'socket-io': 'Socket.io'
};

const projects: {
  [s: string]: PageDescriptor
} = {
  'hens-world':{
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
    techs: ['angular', 'coffeescript', 'gulp', 'less'],
    images: [
      require('./assets/wittyfit/1.jpg'),
      require('./assets/wittyfit/2.jpg'),
    ]
  },
  'the-last-frontier': {
    techs: ['angular', 'nodejs', 'socket-io', 'typescript', 'mySQL', 'webpack'],
    images: [
      require('./assets/le-refuge-des-souvenirs/1.jpg'),
      require('./assets/le-refuge-des-souvenirs/2.jpg'),
      require('./assets/le-refuge-des-souvenirs/3.jpg'),
      require('./assets/le-refuge-des-souvenirs/4.jpg'),
    ]
  },
  'le-refuge-des-souvenirs': {
    techs: ['typescript', 'react', 'sass', 'nodejs', 'socket-io', 'mySQL', 'knex', 'webpack'],
    images: [
      require('./assets/le-refuge-des-souvenirs/1.jpg'),
      require('./assets/le-refuge-des-souvenirs/2.jpg'),
      require('./assets/le-refuge-des-souvenirs/3.jpg'),
      require('./assets/le-refuge-des-souvenirs/4.jpg'),
    ]
  },
  'eternity-run': {
    techs: ['ES6', 'phaser', 'sass', 'webpack'],
    images: [
      require('./assets/le-refuge-des-souvenirs/1.jpg'),
      require('./assets/le-refuge-des-souvenirs/2.jpg'),
      require('./assets/le-refuge-des-souvenirs/3.jpg'),
      require('./assets/le-refuge-des-souvenirs/4.jpg'),
    ]
  }
};
['', 'hens-world', 'le-refuge-des-souvenirs', 'the-last-frontier', 'eternity-run', 'wittyfit'];
export {projects, icons, labels};