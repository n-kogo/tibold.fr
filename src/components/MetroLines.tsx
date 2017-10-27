
import * as SVG from "svg.js";
import * as anime from "animejs";
import * as svgjs from "svg.js";
import * as React from "react";
import {withRouter} from "react-router";


interface MetroLine{
  age: number;
  path: string;
  line: svgjs.Path;
  outline: svgjs.Path;
  station: svgjs.Circle;
  ram : HTMLElement;
  animation: any;
}


export class MetroLines extends React.Component<any, any>{
  lines: Array<MetroLine> = [];
  bgColor: string = "#999";
  svg: svgjs.Doc;
  requestAnimationFrameID: number;
  render(){
    return (
      <div className="landing__draw-background" id={"bg-drawing"}>
      </div>
    )
  }
  componentDidMount(){
    this.svg = SVG('bg-drawing').size(window.innerWidth, window.innerHeight);
    this.updateLines();
  }
  updateLines(){
    if(window.location.pathname !== '/'){
      this.lines.forEach((line)=>{
        line.animation.pause();
      });
    }
    else {
      if(this.lines.length === 0){
        this.spawnLine();
      }
      else {
        this.lines.forEach((line)=>{
          line.age++;
        });
        let lastLine = this.lines[this.lines.length - 1];
        if(lastLine.age > 95){
          this.spawnLine();
        }
      }
      this.lines.forEach((line, index)=>{
        if(line.age > 600){
          line.age = 0;
          line.animation = anime({
            targets: [line.line.node, line.outline.node, line.ram, line.station.node],
            opacity:0,
            duration: 800,
            easing: 'linear',
            complete: ()=>{
              line.line.node.parentElement.removeChild(line.line.node);
              line.outline.node.parentElement.removeChild(line.outline.node);
              line.ram.parentNode.removeChild(line.ram);
              this.lines.splice(index, 1);
            }
          });
        }
        else {
          line.animation.play();
        }
      });
    }
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
      age: 0,
      ram: document.createElement('div'),
      animation: anime.timeline()
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
    let pathEl = anime.path(metroLine.line.node);
    metroLine.animation.add({
      targets: [metroLine.line.node, metroLine.outline.node],
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity:{
        value: 1,
        duration: 800,
      },
      delay: function(el: any, i: any) { return i * 50 },
      easing: 'easeInOutSine',
      duration: (metroLine.line.node as any).getTotalLength() * 1.5,
    })
    .add({
      targets: metroLine.station.node,
      opacity: 1,
      duration: 300,
      delay: -70,
      easing: 'linear'
    })
    .add({
      targets: metroLine.ram,
      translateX: pathEl('x'),
      translateY: pathEl('y'),
      easing: 'easeInOutQuad',
      rotate: pathEl('angle'),
      delay: -150,
      opacity:{
        value: 1,
        duration: 300
      },
      duration: (metroLine.line.node as any).getTotalLength() * 3,
    })
    .add({
      targets: metroLine.ram,
      opacity: 0,
      duration: 700,
      easing: 'linear'
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
