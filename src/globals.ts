export interface PageDescriptor  {
  color: string,
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
  react: "React"
};

const projects: {
  [s: string]: PageDescriptor
} = {
  'hens-world':{
    techs: ['angular', 'wordpress', 'coffeescript', 'nodejs', 'mysql','less'],
    color: '#222',
    images:[
      require('./assets/hens-world/1.jpg'),
      require('./assets/hens-world/2.jpg'),
      require('./assets/hens-world/3.jpg'),
      require('./assets/hens-world/4.jpg'),
    ]
  },
  'wittyfit': {
    techs: ['angular', 'coffeescript', 'less'],
    color: '#222',
    images: [
      require('./assets/wittyfit/1.jpg'),
      require('./assets/wittyfit/2.jpg'),
    ]
  }
};
export {projects, icons, labels};