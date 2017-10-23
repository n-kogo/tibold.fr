import * as React from "react";
import * as anime from 'animejs';
import {connect, DispatchProp} from "react-redux";
import {bindActionCreators} from "redux";
import actions from "../store/actions";
import {timeline} from "animejs";
import {projects as pages, PageDescriptor} from '../globals';
import {LinkWrapper} from "./LinkWrapper";
import {CSSProperties} from "react";
import AnimeCallbackFunction = require("animejs");


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
    if(this.props.currentPath === '/' ){
      this.shown = false;
      this.nextImg = null;
      return <span></span>
    }
    else {
      this.shown = true;
    }
    var pageName = this.props.currentPath.replace('/', '');
    var page = pages[pageName];
    this.previousPage = this.currentPage;
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
      var bg = this.currentPage.color;
    }

    let closingPath = page.isPathReversed ?
      `L${page.viewbox[0]},0 L${page.viewbox[0]},${page.viewbox[1]}`
      :
      `L${page.viewbox[0]},${page.viewbox[1]} L${page.viewbox[0]},0z`;

    if(this.previousPage){
      var prevClosingPath = this.previousPage.isPathReversed ?
        `L${this.previousPage.viewbox[0]},0 L${this.previousPage.viewbox[0]},${this.previousPage.viewbox[1]}`
        :
        `L${this.previousPage.viewbox[0]},${this.previousPage.viewbox[1]} L${this.previousPage.viewbox[0]},0z`;
    }

    let pageKeys = Object.keys(pages);
    let linkIndex = pageKeys.indexOf(pageName) >= pageKeys.length - 1 ? 0 : pageKeys.indexOf(pageName) + 1;
    let link = pageKeys[linkIndex];
    let prevLinkIndex = pageKeys.indexOf(pageName) === 0 ? pageKeys.length - 1 : pageKeys.indexOf(pageName) - 1;
    let prevLink = pageKeys[prevLinkIndex];
    let svgStyle: CSSProperties = {position:'relative', zIndex: 50, transform: 'translateY(0)'};
    return (
      <div className="slider" style={{backgroundColor: '#EEE'}}>
        {
          this.previousPage ?
            <svg className="slider__svg"  viewBox={`0 0 ${this.previousPage.viewbox[0]} ${this.previousPage.viewbox[1]}`} style={svgStyle} preserveAspectRatio="none">
              <path id="slider_previous-path" className="slider__path-fill" d={this.previousPage.path + prevClosingPath} strokeWidth={"0"}/>
              <path id="slider_previous-ram-path" d={this.previousPage.path} stroke={"#none"} strokeWidth={"0.005"} fill={"none"}/>
            </svg>
          :
          ''
        }
        <svg className="slider__svg"  viewBox={`0 0 ${page.viewbox[0]} ${page.viewbox[1]}`} style={svgStyle} preserveAspectRatio="none">
          <path id="slider_path" className="slider__path-fill" d={page.path + closingPath} strokeWidth={"0"}/>
          <path id="slider_ram-path" d={page.path} />
        </svg>
        {
          this.previousPage ?
            <div className="slider__station slider__previous-station"> </div>
            :
            ''
        }
        <div className="slider__station slider__current-station"> </div>
        <div className="slider__cache" style={{clipPath: `url(#${pageName}-clip`}}> </div>
        {/*Ram and links*/}
        <LinkWrapper link={'/' + prevLink}>
          <div className="slider__previous-bt slider__bt">{"<"}</div>
        </LinkWrapper>
        <LinkWrapper link={'/' + link}>
          <div className="slider__next-bt slider__bt">{">"}</div>
        </LinkWrapper>
        <div className="slider__ram"> </div>
        {/*Image blocs*/}
        <div className="slider__image" style={{backgroundImage: `url(${this.img})`}}> </div>
        {!!this.nextImg ?
          <div className="slider__next-image" style={{backgroundImage: `url(${this.nextImg})`}}> </div>
          : ''
        }
      </div>
    );
  }
  setPathDraw(path: SVGPathElement, percent: number, isPathReversed?: boolean){
    path.setAttribute('stroke-dasharray', (path.getTotalLength() * percent) + ' ' + (path.getTotalLength() * (1 - percent)));
    if(isPathReversed){
      path.setAttribute('stroke-dashoffset', (path.getTotalLength() * percent) + '');
    }
    else {
      path.setAttribute('stroke-dashoffset', '0');

    }
    return path;
  }
  componentDidMount(){
    let linePath: SVGPathElement = document.getElementById("slider_ram-path") as any;
    this.setPathDraw(linePath, .2, this.currentPage.isPathReversed);
    this.componentDidUpdate();
  }
  componentDidUpdate(){
    if(this.shown){
      this.showSlide();
    }
    if(this.nextImg){
      let ram: HTMLElement = document.querySelector('.slider__ram') as HTMLElement;
      this.transitionSlide();
      this.moveRam();
    }
    else {
      this.placeAll();
    }
  }


  placeAll(){
    if(!this.currentPage) return;
    let ram: HTMLElement = document.querySelector('.slider__ram') as HTMLElement;
    let station: HTMLElement = document.querySelector('.slider__station.slider__current-station') as HTMLElement;
    let prevBt: HTMLElement = document.querySelector('.slider__previous-bt') as HTMLElement;
    let nextBt: HTMLElement = document.querySelector('.slider__next-bt') as HTMLElement;
    if(this.currentPage.isPathReversed){
      this.placeAt(prevBt, 1 - .12);
      this.placeAt(ram, 1 -.20);
      this.placeAt(station, 1 -.20);
      this.placeAt(nextBt, 1 - .28);

    }
    else{
      this.placeAt(prevBt, .1);
      this.placeAt(ram, .2);
      this.placeAt(station, .2);
      this.placeAt(nextBt, .3);
    }
  }

  moveRam(){
    document.querySelectorAll('.slider__svg').forEach((div: HTMLElement)=>{
      div.style.transform = 'translateY(0)';
    });
    anime({
      targets: ['.slider__svg'],
      translateY: [0, "-100%"],
      easing: 'easeInOutQuad',
      duration: (elt, i)=>(2100 - i * 6)
    });
    let ramPos= {
      percent: 20,
      percent2: 0
    };
    let ram: HTMLElement = document.querySelector('.slider__ram') as HTMLElement;
    let prevStation: HTMLElement = document.querySelector('.slider__station.slider__previous-station') as HTMLElement;
    let station: HTMLElement = document.querySelector('.slider__station.slider__current-station') as HTMLElement;
    let prevPath: HTMLElement = document.querySelector('.slider__svg') as HTMLElement;
    let path: HTMLElement = document.querySelectorAll('.slider__svg')[1] as HTMLElement;
    let linePath: SVGPathElement = document.getElementById("slider_ram-path") as any;
    let prevLinePath: SVGPathElement = document.getElementById("slider_previous-ram-path") as any;
    this.placeAt(prevStation, .2, prevLinePath, this.previousPage.isPathReversed);
    this.placeAt(station, .2, linePath, this.currentPage.isPathReversed);
    anime({
      targets: '.slider__bt',
      opacity:0,
      duration: 150,
      easing: 'linear'
    });
    anime({
      targets: ramPos,
      percent: 100,
      easing: 'easeInQuad',
      update: (value)=>{
        let prevRect = prevPath.getBoundingClientRect();
        let rect = path.getBoundingClientRect();
        ram.style.marginTop = prevStation.style.marginTop = (prevRect.top - 67)  + 'px';
        station.style.marginTop = (rect.top - 67)  + 'px';
        var currentValue = (ramPos.percent) / 100;
        //draw line behind moving ram
        this.setPathDraw(prevLinePath, currentValue, this.previousPage.isPathReversed);
        //hide line on next shape
        this.setPathDraw(linePath, 0);
        if(ramPos.percent >= 20){
          this.placeAt(ram, currentValue, document.getElementById('slider_previous-ram-path') as any, this.previousPage.isPathReversed);
        }
      },
      duration: 1550,
      complete: ()=>{
        ram.style.top = '0';
        ram.style.left = '0';
        anime({
          targets: ramPos,
          percent2: 20,
          duration: 550,
          easing: 'easeOutQuad',
          update:()=>{
            // console.log(ram.style.top, ram.style.left, ram.style.marginTop, this.previousPage.isPathReversed, this.previousPage.name);
            let prevRect = prevPath.getBoundingClientRect();
            let rect = path.getBoundingClientRect();
            prevStation.style.marginTop = (prevRect.top - 67)  + 'px';
            ram.style.marginTop = station.style.marginTop = (rect.top - 67)  + 'px';

            let currentValue = (ramPos.percent2) / 100;
            //draw line behind moving ram
            this.setPathDraw(linePath, currentValue, this.currentPage.isPathReversed);
            this.placeAt(ram, currentValue, document.getElementById('slider_ram-path') as any, this.currentPage.isPathReversed);
          },
          complete: ()=>{
            setTimeout(()=>{
              ram.style.marginTop = "0";
              this.placeAll();
              anime({
                targets: '.slider__bt',
                opacity:1,
                duration: (elt,i) => (150 + 150 * i),
                easing: 'linear'
              });
            }, 50);
          }
        });
      },
    })
  }

  placeAt(element: HTMLElement, percent:number, p?: SVGPathElement, isPathReversed?: boolean){
    if(isPathReversed) percent = 1 - percent;
    if(!p){
      p = document.getElementById('slider_ram-path') as any;
    }
    let pathEl = anime.path(p);
    let p1 = p.getPointAtLength(p.getTotalLength() * percent);
    let p0 = p.getPointAtLength(p.getTotalLength() * (percent - 0.01));
    // console.log(p1, p0, percent, p.getAttribute('d'));
    let angle =  ( Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180) / Math.PI;
    if(this.currentPage.isPathReversed){
      angle += 180;
    }

    element.style.left = p1.x * 100 / this.currentPage.viewbox[0]  + '%';
    element.style.top = p1.y * 100 / this.currentPage.viewbox[1] + '%';
    element.style.transform = `rotate(${angle}deg) translateX(-50%) translateY(-50%)`;
  }

  transitionSlide(){
   let tl =  timeline({
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

