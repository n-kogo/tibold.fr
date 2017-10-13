import * as React from "react";
import {Logo} from "../components/Logo";
import {SideNav} from "../components/SideNav";
import {Link} from "react-router-dom";
import * as SVG from "svg.js";
import * as anime from "animejs";
import * as svgjs from "svg.js";

interface MetroLine{
  spawnTime: number;
  path: string;
  line: svgjs.Path;
  outline: svgjs.Path;
  station: svgjs.Circle;
  ram : HTMLElement;
  animation: any;
}

export class Landing extends React.Component{
  lines: Array<MetroLine> = [];
  bgColor: string = "#999";
  requestAnimationFrameID: number;
  svg: svgjs.Doc;
  render(){
    return (
      <div className="landing" >
        <div className="landing__draw-background" id={"bg-drawing"}>
        </div>
        <div className="landing__wrapper" style={{backgroundColor: this.bgColor, padding: '15px 15px 150px 15px'}}>
          <div >
            <Logo fontSize={70} />
          </div>
          <Link to={'/home'} className="landing__button" onClick={()=>this.navTo('home')}>
            V
          </Link>
          <SideNav />
        </div>
      </div>
    )
  }
  navTo(path: string){

  }
  componentDidMount(){
    this.svg = SVG('bg-drawing').size(window.innerWidth, window.innerHeight);
    this.updateLines();
  }
  updateLines(){
    if(this.lines.length === 0){
      this.spawnLine();
    }
    else {
      let lastLine = this.lines[this.lines.length - 1];
      if(performance.now() - lastLine.spawnTime > 1600){
        this.spawnLine();
      }
    }
    this.lines.forEach((line, index)=>{
      if(performance.now() - line.spawnTime > 10000){
        anime({
          targets: [line.line.node, line.outline.node, line.ram, line.station.node],
          opacity:0,
          duration: 800,
          easing: 'linear',
          complete: ()=>{
            line.line.node.parentElement.removeChild(line.line.node)
            line.outline.node.parentElement.removeChild(line.outline.node);
            line.ram.parentNode.removeChild(line.ram);
            this.lines.splice(index, 1);
            console.log(line.line.node);
          }

        });
        line.spawnTime = performance.now();
      }
    });
    this.requestAnimationFrameID = requestAnimationFrame(()=> this.updateLines());
  }
  spawnLine(){
    let cont = document.querySelector('.landing__draw-background')
    let path = this.generatePath();
    let metroLine: MetroLine = {
      path: path,
      outline: this.svg.path(path),
      line: this.svg.path(path),
      station: this.svg.circle(40),
      spawnTime: performance.now(),
      ram: document.createElement('div'),
      animation: 'lol'
    };
    this.lines.push(metroLine);
    cont.appendChild(metroLine.ram);
    metroLine.ram.classList.add('metro-rect');
    metroLine.outline
      .stroke({width: 15, color: this.bgColor})
      .opacity(0)
      .fill('none');
    metroLine.line
      .stroke({width: 3, color:'#CCC'})
      .opacity(0)
      .fill('none');
    let l = ((metroLine.line.node as any) as SVGPathElement);
    let circlePos = l.getPointAtLength(l.getTotalLength());
    metroLine.station
      .fill(this.bgColor)
      .opacity(0)
      .stroke({
        color: '#DDD',
        width: 3
      })
      .cx(circlePos.x).cy(circlePos.y);

    let a = anime({
      targets: [metroLine.line.node, metroLine.outline.node],
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity:{
        value: 1,
        duration: 800,
      },
      delay: function(el, i) { return i * 50 },
      easing: 'easeInOutSine',
      duration: (metroLine.line.node as any).getTotalLength() * 1.5,
      complete: ()=>{
        anime({
          targets: metroLine.station.node,
          opacity: 1,
          duration: 300,
          easing: 'linear'
        })
      }
    });

    let pathEl = anime.path(metroLine.line.node);
    anime({
      targets: metroLine.ram,
      translateX: pathEl('x'),
      translateY: pathEl('y'),
      easing: 'easeInOutQuad',
      rotate: pathEl('angle'),
      opacity:{
        value: 1,
        duration: 300
      },
      duration: (metroLine.line.node as any).getTotalLength() * 3,
      delay: 300,
      complete: ()=>{
        anime({
          targets: metroLine.ram,
          opacity: 0,
          duration: 700,
          easing: 'linear'
        })
      }
    });
    let w = document.createElement('svg');
  }

  generatePath(){
    let p = "";
    let w = window.innerWidth;
    let h = window.innerHeight;
    let poly = [
      {x: w, y: 0},
      {x: 0, y: h},
      {x: -w, y: 0},
      {x: 0, y: -h}
    ];
    let seed = Math.random();
    let {pos, segment} = this.posOnPolygon(seed, poly);
    p += `M${pos.x},${pos.y} `;
    seed = Math.random();
    let p1 = {x:Math.sign(-poly[segment].y) * w * seed, y: Math.sign(poly[segment].x) * h * seed};
    p += `l${p1.x},${p1.y} `;
    seed = Math.random() * 60 + 20;
    let xSign = Math.sign(-poly[segment].y);
    let ySign = Math.sign(poly[segment].x);
    let curbDir = this.randomSign();
    if(xSign !== 0){
      p += `l${xSign * seed},${curbDir * seed}`;
      p += `l${w * xSign * Math.random()}, ${0}`;
    }
    else {
      p += `l${seed * curbDir},${ySign * seed}`;
      p += `l${0}, ${h * Math.random()* ySign}`;
    }
    return p;
  }

  randomSign(){
    return Math.random() < .5 ? -1 : 1;
  }
  posOnPolygon(seed: number, polygon: Array<{x: number, y: number}>){
    let pos = {x: 0, y: 0};
    let segment = 0;
    let l = polygon.length;
    let step = 1 / l;
    polygon.some((line, index)=>{
      let v = Math.max(0, seed - step * index) - Math.max(0, seed - step * (index + 1));
      if(v > 0){
        pos.x += line.x * v * l;
        pos.y += line.y * v * l;
        segment = index;
        return false;
      }
      else {
        return true;
      }
    });
    return {pos, segment};
  }

  componentWillUnmount(){
    cancelAnimationFrame(this.requestAnimationFrameID);
  }

}