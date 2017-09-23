import * as React from "react";
import * as anime from 'animejs';
import {connect, DispatchProp} from "react-redux";
import {bindActionCreators} from "redux";
import actions from "../store/actions";
import {timeline} from "animejs";

interface PageDescriptor {
  color: string,
  images:Array<string>
}

let pages: {
  [s: string]: PageDescriptor
} = {
  'hens-world':{
    color: '#222',
    images:[
      require('../assets/hens-world/1.jpg'),
      require('../assets/hens-world/2.jpg'),
      require('../assets/hens-world/3.jpg'),
      require('../assets/hens-world/4.jpg'),
    ]
  },
  'wittyfit': {
    color: '#222',
    images: [
      require('../assets/wittyfit/1.jpg'),
      require('../assets/wittyfit/2.jpg'),
    ]
  }
};
interface SliderProps extends DispatchProp<any>{
  currentPath: string;
  actions: any;
}

class SliderComponent extends  React.Component<SliderProps, any>{
  shown: boolean = true;
  img: string;
  nextImg: string;
  previousImage: string;
  currentPage: PageDescriptor;
  previousPage: PageDescriptor;
  constructor(props: SliderProps){
    super(props);
    this.state = {
      currentPath: props.currentPath.replace('/', '')
    }
  }

  render(){
    if(this.props.currentPath === '/'){
      this.shown = false;
      return <span></span>
    }
    else {
      this.shown = true;
    }
    var page = pages[this.props.currentPath.replace('/', '')];
    this.currentPage = page;
    if(this.previousImage){
      this.nextImg = page.images[Math.floor(Math.random() * page.images.length)];
      this.img = this.previousImage;
      this.previousImage = this.nextImg;
      var bg = this.previousPage.color;
    }
    else {
      this.img = page.images[Math.floor(Math.random() * page.images.length)];
      this.previousImage = this.img;
      this.previousPage = page;
      var bg = this.currentPage.color;
    }
    return (
      <div className="slider" style={{backgroundColor: bg}}>
        <div className="slider__cache"> </div>
        <img className="slider__image" src={this.img} />
        {!!this.nextImg ?
          <img className="slider__next-image" src={this.nextImg} />
          : ''
        }
        <svg width="0" height="0">
          <defs>

            <clipPath id="myClip"  clipPathUnits="objectBoundingBox">
              <path d="M0,1, 0,0 .5,0 Q .62,.4 .8,.5 Q .95,.7 1,1 Z"/>
            </clipPath>
            <clipPath id="hens-world-clip"  clipPathUnits="objectBoundingBox">
              <path d="M0,1, 0,0 .5,0 Q .62,.4 .8,.5 Q .95,.7 1,1 Z"/>
            </clipPath>
            <clipPath id="wittyfit-clip"  clipPathUnits="objectBoundingBox">
              <path d="M0,1, 0,0 .5,0 Q .62,.4 .8,.5 Q .95,.7 1,1 Z"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }
  componentDidMount(){
    this.componentDidUpdate();
  }
  componentDidUpdate(){
    console.log('update slide', this.shown)
    if(this.shown){
      this.showSlide();
    }
    if(this.nextImg){
      console.log('transition slide')
      this.transitionSlide();
    }
  }

  transitionSlide(){
   let tl =  timeline({
     update: (d: any)=>{
       console.log(d)
     }
   });
   let i = document.querySelector('.slider__image') as HTMLElement;
   let ni  = document.querySelector('.slider__next-image') as HTMLElement;
   let s = document.querySelector('.slider');
   i.style.opacity = '1';
   ni.style.opacity = '0';
   tl.add({
     targets: i,
     opacity: 0,
     duration: 400,
     easing: 'linear',
   })
   .add({
     targets: s,
     backgroundColor: this.currentPage.color,
     easing: 'linear',
     duration: 550,
     offset: 300,
   })
   .add({
     targets: ni,
     opacity: 1,
     duration: 600,
   });
   this.previousPage = this.currentPage;
  }

  showSlide(){
    let s = document.querySelector('.slider__cache');
    let timeout = 400;
    setTimeout(()=>{
      s.classList.add('closing');
    }, timeout * .7);
    anime({
      targets: s,
      translateY: {
        value: 15,
        duration: 400
      },
      translateX: {
        value: '-40%',
        duration: 650,
        delay: 410
      },
      opacity: {
        value: 0,
        duration: 440,
        delay: 550
      },
      offset: timeout,
      easing: 'easeInOutQuad'
    });
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

function mapStateToProps(state = {currentPath: ''}, ownProps: any) {
  return {currentPath: state.currentPath}
}

export let Slider = connect(mapStateToProps, mapDispatchToProps)(SliderComponent);

