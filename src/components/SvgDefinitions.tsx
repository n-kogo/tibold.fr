import * as React from "react";

export class SvgDefinitions extends  React.Component{
  render(){
    return (
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
          <clipPath id="project-excerpt-clip" clipPathUnits="objectBoundingBox">
            <path id="XMLID_2_" d="M1,0L 0.25, 0 C0.25,0 0.35,0.1 0.35,0.45 C0.35,.8 0.22,.8 0.2,1 L1,1 Z"/>
          </clipPath>
        </defs>
      </svg>
    )
  }
}