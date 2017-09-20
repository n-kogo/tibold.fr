import * as React from "react";
import * as anime from 'animejs';
import {connect, DispatchProp} from "react-redux";
import {bindActionCreators} from "redux";
import actions from "../store/actions";

let images: {[s: string]: Array<any>} = {
  'hens-world':[
    require('../assets/hens-world/1.jpg'),
    require('../assets/hens-world/2.jpg'),
    require('../assets/hens-world/3.jpg'),
    require('../assets/hens-world/4.jpg'),
  ],
  'wittyfit': [
    require('../assets/wittyfit/1.jpg'),
    require('../assets/wittyfit/2.jpg'),
  ]
};
interface SliderProps extends DispatchProp<any>{
  currentPath: string;
}

class SliderComponent extends  React.Component<SliderProps, any>{
  constructor(props: SliderProps){
    super(props);
    this.state = {
      currentPath: props.currentPath.replace('/', '')
    }
  }

  render(){
    let carousel = images[this.props.currentPath.replace('/', '')];
    let img = carousel[Math.floor(Math.random() * carousel.length)];
    console.log('?', this.props.currentPath, img);
    return (
      <div className="slider">
        <div className="slider__cache"> </div>
        <div className="slider__image" style={{backgroundImage: `url(${img})`}}> </div>
        <svg width="0" height="0">
          <defs>
            <clipPath id="myClip"  clipPathUnits="objectBoundingBox">
              <path d="M0,1, 0,0 .5,0 Q .62,.4 .8,.5 Q .95,.7 1,1 Z"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }
  componentDidMount(){
    this.showSlide()
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

function mapStateToProps(state: any, ownProps: any) {
  return {currentPage: state.currentPage}
}

export Slider = connect()(SliderComponent)