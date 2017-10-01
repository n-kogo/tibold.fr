import * as React from "react";
import * as anime from 'animejs';
import {connect, DispatchProp} from "react-redux";
import {bindActionCreators} from "redux";
import actions from "../store/actions";
import {timeline} from "animejs";
import {projects as pages, PageDescriptor} from '../globals';


interface SliderProps{
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
    var pageName = this.props.currentPath.replace('/', '');
    var page = pages[pageName];
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
      <div className="slider" style={{backgroundColor: bg, clipPath: `url(#${pageName}-clip)`}}>
        <div className="slider__cache" style={{clipPath: `url(#${pageName}-clip`}}> </div>
        <img className="slider__image" src={this.img} />
        {!!this.nextImg ?
          <img className="slider__next-image" src={this.nextImg} />
          : ''
        }
        <svg width="0" height="0">
          <defs>
            <clipPath id="myClip"  clipPathUnits="objectBoundingBox">
              <path d="M0,1, 0,0 .5,0 Q .62,.4 .8,.5 Q .95,.7 1,1 Z"/>
              {/*<path d="M0 0L0 1C0.44 1 0.66 1 0.66 1C0.74 0.83 0.88 0.76 0.91 0.53C0.92 0.38 0.85 0.2 0.7 0L0.01 0Z" id="bK9LiFI55"/>*/}
            </clipPath>
            <clipPath id="hens-world-clip"  clipPathUnits="objectBoundingBox">
              {/*<path d="M0,1, 0,0 .5,0 Q .62,.4 .8,.5 Q .95,.7 1,1 Z"/>*/}
              <path d="M0 0L0 1C0.44 1 0.66 1 0.66 1C0.74 0.83 0.88 0.76 0.91 0.53C0.92 0.38 0.85 0.2 0.7 0L0.01 0Z" id="bK9LiFI55"/>
            </clipPath>
            <clipPath id="wittyfit-clip"  clipPathUnits="objectBoundingBox">
              {/*<path d="M0,1, 0,0 .5,0 Q .62,.4 .8,.5 Q .95,.7 1,1 Z"/>*/}
              <path d="M0.37 0.45C0.36 0.45 0.36 0.44 0.36 0.44C0.34 0.4 0.47 0.21 0.75 -0.12C0.37 -0.12 0.11 -0.12 -0.04 -0.12C-0.11 -0.12 -0.16 0.65 -0.01 0.88C0.19 1.22 0.63 1.06 0.6 0.98C0.57 0.93 0.56 0.87 0.56 0.82C0.56 0.65 0.67 0.5 0.82 0.45C0.87 0.43 0.38 0.45 0.37 0.45Z" id="hYOcygPEE" />
              <path d="M-0.08 0.98C-0.09 1.15 0.17 1.05 0.17 1.1C0.17 1.21 0.21 0.5 0.17 0.5C0.11 0.5 0.86 0.48 0.81 0.44C0.75 0.39 0.7 0.31 0.7 0.22C0.7 0.12 0.76 0.03 0.84 -0.02C0.88 -0.04 -0.34 0.02 -0.29 0.02C-0.18 0.02 -0.07 0.62 -0.08 0.98Z" id="ae0pqxJut" />            </clipPath>
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

