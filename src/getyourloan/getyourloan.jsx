import React, { Component } from 'react';
import finance from '../images/finance.png';
import play from '../images/play.png';
import flow from '../images/flow.png';
import history from '../history';
import { Link} from 'react-router-dom';

class GetYourLoan extends Component {
    state = {  }

    authentication = () => {
        history.push('/AboutYou')
    }
    render() { 
        return ( 
            <div id="getyourloan" className="pt-5 container-fluid">
                <div className="row">
                    <div className="col-lg-6 offset-md-1">
                        <h1 className="mt-5">GET YOUR LOAN</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Aliquam interdum nisl a lacus</p>
                        {/* <button type="submit" onClick={this.authentication} className="mt-4">APPLY NOW</button> */}
                        <Link to ="/AboutYou" className="mt-4 button">APPLY NOW</Link>
                        <img src={play} alt="getyourloan" className="img-fluid play ml-5"/>
                    </div>

                    <div className="col-lg-4 ml-5 mt-5">
                        <img src={finance} alt="getyourloan" className="img-fluid mx-auto d-block"/>
                    </div>
                </div>
                <div className="row flow d-block">
                <img src={flow} alt="scrolldown" className="mx-auto d-block "/>
                </div>
            </div>
         );
    }
}
 
export default GetYourLoan;