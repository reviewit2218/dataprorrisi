import React, { Component } from 'react';
import security from '../images/security.svg';


class FastSecureConvenient extends Component {
    state = {  }
    render() { 
        return (
            <div className="container d-flex align-items-center clearfix">
                <div id="fastSecureContent" className="row ">
                
                    <div className="col-lg-7 align-self-center">
                        <h1 className="mt-5">FAST SECURE CONVENIENT</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum nisl a lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum nisl a lacus</p>
                        <button type="submit" className="mt-4">APPLY NOW</button>
                        
                    </div>
                    <div className="col-lg-5">
                        <img src={security} alt="getyourloan" className="img-fluid mx-auto d-block"/>
                    </div>
                    
                </div>
 
            </div>
        );
    }
}
 
export default FastSecureConvenient;