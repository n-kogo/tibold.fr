import * as React from "react";
import {IconList} from "./IconList";
import classNames = require("classnames");
import {Button} from "./Button";
import {Line} from "./Line";
import {MoreButton} from "./MoreButton";
import {timeline} from "animejs";
import {pContent} from "../globals";
import * as ReactDOM from "react-dom";

interface ProjectProps{
  tag: string;
  url: string;
  introOffset: number;
}

interface FitTextProps{
  compressor?: number,
  minFontSize?: number,
  maxFontSize?: number
}

class FitText extends React.Component<FitTextProps, any>{
  static defaultProps = {
    compressor: 2,
    minFontSize: 12,
    maxFontSize: 100,
  };
  componentDidMount() {
    window.addEventListener("resize", this._onBodyResize.bind(this));
    this._onBodyResize();
  }


  componentWillUnmount() {
    window.removeEventListener("resize", this._onBodyResize.bind(this));
  }

  componentDidUpdate() {
    this._onBodyResize();
  }

  _onBodyResize() {
    var element: HTMLElement = ReactDOM.findDOMNode(this) as HTMLElement;
    var ve: HTMLElement = document.createElement('div');
    let targetWidth = element.offsetWidth;
    ve.classList.add('virtual-fit-text');
    let baseFontSize =  55;
    ve.style.fontSize = baseFontSize + 'px';

    ve.innerHTML = element.innerHTML;
    element.style.fontSize = ve.style.fontSize;
    console.log('iteration', baseFontSize, targetWidth, ve.clientWidth);
    while(ve.offsetWidth > targetWidth){
      element.style.fontSize = baseFontSize-- + 'px';
      console.log('iteration', baseFontSize, targetWidth)
    }
  }
  render(){
    return (
      <span >
        {this.props.children}
      </span>
    )
  }
}


export class Project extends React.Component<ProjectProps, any>{
  render(){
    let content = pContent[this.props.tag];
    return (
      <div className={classNames('project', this.props.tag)}>
        <div className="project__flex">
          <FitText>
            {this.props.children}
          </FitText>
          <h3>{content.excerpt}</h3>
          <div className="project__excerpt">
            {Array.isArray(content.description) ?
              content.description.map((line, index)=>(
                <p key={index}>{line}</p>
              ))
              :
              <p>{content.description}</p>
            }
          </div>
          <IconList project={this.props.tag} introOffset={this.props.introOffset} />
          <Line>
            <Button text="Accéder au Site" link={this.props.url} />
            <MoreButton />
          </Line>
        </div>
      </div>
    )
  }
  componentDidMount(){
    this.introPage();
  }
  introPage(){
    let tl = timeline();
    console.log('intro')
    tl.add({
      targets: '.project__excerpt',
      translateY: -25,
      opacity: 0,
      duration: 1,
      offset: `+=${this.props.introOffset + 1000}`,
      easing: 'linear'
    });
    tl.add({
      targets: ['.project h3', '.project .button'],
      translateY: -30,
      opacity: 0,
      duration: 1,
      offset: `+=1`,
      easing: 'linear'
    });
    tl.add({
      targets: '.project h3',
      translateY: 0,
      opacity: 1,
      duration: 700,
      easing: 'easeInOutQuad'
    });
    tl.add({
      targets: '.project__excerpt',
      translateY: 0,
      opacity: 1,
      duration: 600,
      easing: 'easeInOutQuad',
      offset: '-=200'
    });
    tl.add({
      targets: '.project .button',
      translateY: 0,
      opacity: 1,
      easing: 'easeInOutQuad',
      offset: '+=400',
      duration: 500,
    });
    tl.play();
  }
}