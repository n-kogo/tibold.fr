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
      <div className="slider" style={{backgroundColor: '#EEE', clipPath: `url(#${pageName}-clip)`}}>
        <div className="slider__cache" style={{clipPath: `url(#${pageName}-clip`}}> </div>
        {/*<img className="slider__image" src={this.img} />*/}
        <div className="slider__image" style={{backgroundImage: `url(${this.img})`}}> </div>
        {/*<img className="slider__next-image" src={this.nextImg} />*/}
        {!!this.nextImg ?
          <div className="slider__next-image" style={{backgroundImage: `url(${this.nextImg})`}}> </div>
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
              <path id="XMLID_2_" d="M0.7,0c0.1,0.2,0.2,0.3,0.2,0.5S0.7,0.9,0.7,1C0.7,1.1,0,1,0,1V0C0,0,0.6-0.2,0.7,0z"/>
              {/*<path d="M0 0L0 1C0.44 1 0.66 1 0.66 1C0.74 0.83 0.88 0.76 0.91 0.53C0.92 0.38 0.85 0.2 0.7 0L0.01 0Z" id="bK9LiFI55"/>*/}
            </clipPath>
            <clipPath id="wittyfit-clip"  clipPathUnits="objectBoundingBox">
              <circle cx=".3" cy=".2" r=".5"/>
              <circle cx=".2" cy=".7" r=".7"/>
            </clipPath>
            <clipPath id="the-last-frontier-clip"  clipPathUnits="objectBoundingBox">
              <circle cx=".2" cy=".2" r=".5"/>
              <circle cx=".3" cy=".7" r=".7"/>
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

