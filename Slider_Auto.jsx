import React from 'react';
import "./style.css"
import imageOne from './images/1.jpg';
import imageTwo from './images/2.jpg';
import imageThree from './images/3.jpg';

 
import ImageFadeIn from 'react-image-fade-in'

export default class Slider_Auto extends React.Component{
   render () {
    return (
      <ImageFadeIn width={"100%"} height={"100%"} src={imageTwo} />
    )
  }
}