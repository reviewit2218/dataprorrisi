import React, { Component } from 'react';
import HeaderBg from '../header/headerbg';
import Footer from '../footer/footer';
import { Link} from 'react-router-dom';
import success from '../images/success.png';

class SubmitSuccess extends Component {
    state = {  }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div id="submitsuccess">
                <HeaderBg />
                <h1 className="loanTitle mt-5 pl-5">submitted successfully</h1>
                <div className="container pt-5">
                <img src={success} alt="success" className="img-fluid mx-auto d-block" id="successimg"/>
                       <h1 className="text-center pt-5">Thank You!</h1> 
                       <h3 className="text-center">We have Received your Request. We are Processing it and we will Get back to you soon.</h3>
                    <div className="row pt-5">
                            <div id="Next" className="col-sm-12 text-center">
                                <Link to ="/" className="button">TAKE ME HOME</Link>
                            </div>
                        </div>
                        
                   
                    </div>
                <Footer />
            </div>
        );
    }
}

export default SubmitSuccess;