import React, { Component } from 'react';
import HeaderBg from '../header/headerbg';
import Footer from '../footer/footer';
import { Link} from 'react-router-dom';

class VerifyId extends Component {
    state = {  }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div id="verifyid">
                <HeaderBg />
                <h1 className="loanTitle mt-5 pl-5"><span className="formNumber">3</span> verify your id</h1>
                <div className="container pt-5">
                    <form className="mx-auto" id="formAboutYou">
                    <div className="row">
                    <div class="form-group col-sm-12 col-md-6 ">
                        <label for="licence">Driver licence</label>
                        <input type="text" class="form-control" id="licence" aria-describedby="licence" placeholder="4988977637" />
                        </div>
                    </div>
                    
                    <div className="row">
                    <div class="form-group col-sm-12 col-md-6">
                        <label for="exampleInputEmail1">Residential Address</label>
                        <input type="text" class="form-control" id="mobilenumber" aria-describedby="mobile" placeholder="42 Wallaby Way, SY"/>
                    </div>
                    <div class="form-group col-sm-12 col-md-6">
                    <label htmlFor="exampleInputEmail1">Type of Residence</label>
                            <select class="custom-select" required>
                                <option value="">please select</option>
                                <option value="1">Own</option>
                                <option value="2">Rented</option>
                            </select> 
                    </div>
                    </div>

                    <p>I have lived at this address for..</p>
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
                                <Link to ="/Income" className="button">Next</Link>
                            </div>
                        </div>

                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default VerifyId;