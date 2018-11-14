import React, { Component } from 'react';
import HeaderBg from '../header/headerbg';
import Footer from '../footer/footer';
import { Link} from 'react-router-dom';

class EmploymentDetails extends Component {
    state = {  }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div id="EmploymentDetails">
                <HeaderBg />
                <h1 className="loanTitle mt-5 pl-5"><span className="formNumber">2</span> Employment Details</h1>
                <div className="container pt-5">
                    <form className="mx-auto" id="formAboutYou">
                    <div class="row">
                    <div class="form-group col-sm-12 col-md-6 ">
                            <label htmlFor="exampleInputEmail1">Employment Type</label>
                            <select class="custom-select" required>
                                <option value="">please select</option>
                                <option value="1">Salaried</option>
                                <option value="2">Self Employed</option>
                            </select>  
                        </div>
                         
                        <div class="form-group col-sm-12 col-md-6 ">
                            <label htmlFor="exampleInputPassword1">Occupation</label>
                            <select class="custom-select" required>
                        <option value="">please select</option>
                        <option value="1">Business</option>
                        <option value="2">Private</option>
                        <option value="3">Government</option>
                        </select>  
                        </div>
                        </div>
                        <p>I have worked with this Employee for..</p>
                        <div class="row">
                        <div class="form-group col-sm-12 col-md-6 ">
                            <label htmlFor="exampleInputEmail1">Years</label>
                            <select class="custom-select" required>
                                <option value="">please select</option>
                                <option value="1">0-5</option>
                                <option value="2">5-10</option>
                            </select>  
                        </div>
                         
                        <div class="form-group col-sm-12 col-md-6 ">
                            <label htmlFor="exampleInputPassword1">Months</label>
                            <select class="custom-select" required>
                                <option value="">please select</option>
                                <option value="1">0-5</option>
                                <option value="2">5-10</option>
                                </select>  
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div id="Next" className="col-sm-12">
                                <Link to ="/VerifyId" className="button">Next</Link>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default EmploymentDetails;