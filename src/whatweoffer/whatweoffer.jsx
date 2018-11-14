import React, { Component } from 'react';
import Slider from '../offerslider/slider';

class WhatWeOffer extends Component {
    state = {  }
    render() { 
        return ( 
        <div id="whatweoffer" className="clearfix">
        <h1 className="text-center d-block">WHAT WE OFFER</h1>
        <p className="text-center p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum faucibus sapien,<br /> et auctor massa molestie volutpat. Proin quis cursus mi. </p>
        <Slider />
        </div> );
    }
}
 
export default WhatWeOffer;