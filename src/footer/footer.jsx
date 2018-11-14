import React, { Component } from 'react';
import newsletter from '../images/newsletter.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import twitter from '../images/twitter.png';
import { Link} from 'react-router-dom';
import history from '../history';

class Footer extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div id="footer">
                <h1 className="text-center pb-5">JOIN NEWSLETTER</h1>
                <div className="inner-addon right-addon pb-5">
                    <img className="glyphicon glyphicon-search" src={newsletter} alt=""/>
                    <input type="text" className="form-control" placeholder="Enter Email address" />
                </div> 

                <div id="footercontent" className="row container mx-auto pt-5">
                    <div className="col-md-5 mx-auto pb-2">
                        <h3>dataprorrisi</h3>
                        <small>Duis ut justo eu ante convallis molestie. Duis congue justo quis risus mattis,<br /> at tincidunt ante ullamcorper. Proin sollicitudin aliquet convallis.</small>
                        <div id="social" className="pt-4 mr-auto">
                        <img src={facebook} alt="facebook"/>
                        <img src={youtube} alt="youtube"/>
                        <img src={twitter} alt="twitter"/>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto pb-3">
                        <h3>Quick Links</h3>
                        <small>Signup</small>
                        <small><Link to ="/Login" className="mt-4 button text-white">Login</Link></small>
                        <small>Apply Loan</small>
                        <small>Calculator</small>
                    </div>
                    <div className="col-md-3 mx-auto pb-5">
                        <h3>Partners</h3>
                        <small>Content1</small>
                        <small>Content2</small>
                        <small>Content3</small>
                        <small>Content4</small>
                    </div>
                </div> 
            </div>
         );
    }
}
 
export default Footer;