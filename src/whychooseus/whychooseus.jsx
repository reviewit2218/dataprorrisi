import React, { Component } from 'react';
import report from '../images/report.svg';


class WhyChooseUs extends Component {
    state = {  }
    render() { 
        return ( <div>
            <div id="whychooseus" className="pt-5 container-fluid d-flex align-items-center clearfix">
                <div id="whyChooseUsContent" className="row">
                <div className="col-lg-4 ml-5 mt-5  order-1 order-lg-1">
                        <img src={report} alt="getyourloan" className="img-fluid mx-auto d-block"/>
                    </div>
                    <div className="col-lg-5 align-self-center order-0 order-lg-2">
                        <h1 className="mt-5">WHY CHOOSE US</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum nisl a lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum nisl a lacus</p>
                        <button type="submit" className="mt-4">LEARN MORE</button>
                        
                    </div>

                    
                </div>
 
            </div>
        </div> );
    }
}
 
export default WhyChooseUs;