import React, { Component } from 'react';
import Footer from '../footer/footer';
import HeaderBg from '../header/headerbg';
import { Link} from 'react-router-dom';

const $ = window.$;

class AboutYou extends Component {
    state = { rangeValue:'' }
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        
    }
    componentDidMount(){
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          })
          window.scrollTo(0, 0);
    }
      handleChange(e){
        this.state.rangeValue = e.target.value;
        this.setState({rangeValue : e.target.value});
          
        
      }

    render() { 
        return ( 
            <div id="AboutYou">
                <HeaderBg />
                <h1 className="loanTitle mt-5 pl-5"><span className="formNumber">1</span> ABOUT YOU</h1>
                <div className="container pt-5">
                <form className="mx-auto" id="formAboutYou">
                    <div className="row">
                    <div class="form-group col-sm-12 col-md-6">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" class="form-control" id="FName" aria-describedby="Name" placeholder="Jessica" required/>
                    </div>
                    <div class="form-group col-sm-12 col-md-6">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="text" class="form-control" id="LName" aria-describedby="Name" placeholder="Doe" />
                    </div>
                    </div>

                    <div className="row">
                    <div class="form-group col-sm-12 col-md-6">
                        <label for="exampleInputEmail1">Mobile Number</label>
                        <input type="text" class="form-control" id="mobilenumber" aria-describedby="mobile" placeholder="(+1)" required/>
                    </div>
                    <div class="form-group col-sm-12 col-md-6">
                        <label for="exampleInputEmail1">Email Address</label>
                        <input type="text" class="form-control" id="email ddress" aria-describedby="emailHelp" placeholder="Email Address" required/>
                    </div>
                    </div>

                    <div className="row">
                    <div class="form-group col-sm-12 col-md-6 ">
                        <label for="exampleInputEmail1">Date of Birth</label>
                        <div className="d-flex">
                        <input type="text" class="form-control mr-2" id="date" aria-describedby="emailHelp" placeholder="DD" required/>
                        <input type="text" class="form-control mr-2" id="month" aria-describedby="emailHelp" placeholder="MM" required/>
                        <input type="text" class="form-control" id="year" aria-describedby="emailHelp" placeholder="YYYY" required/>
                    </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="form-group col-sm-12 col-md-6 ">
                            <label htmlFor="exampleInputEmail1">Marital Status</label>
                            <select class="custom-select" required>
                                <option value="">please select</option>
                                <option value="1">married</option>
                                <option value="2">unmarried</option>
                                <option value="3">divorced</option>
                            </select>  
                        </div>
                         
                        <div class="form-group col-sm-12 col-md-6 ">
                            <label htmlFor="exampleInputPassword1">Number of Dependants</label>
                            <select class="custom-select" required>
                        <option value="">please select</option>
                        <option value="1">one</option>
                        <option value="2">two</option>
                        <option value="3">three</option>
                        </select>  
                        </div>
                        </div>

                        <div classNamerow="row">
                        <label htmlFor="exampleInputEmail1">About your Loan</label>
                            <div class="form-group">
                                <label htmlFor="exampleInputEmail1">Amount</label>
                                <div className="w-100 d-flex">
                                    <span class="startrange">2,500</span>
                                    <div class="range">
                                        <input id="range1" type="range" onChange={this.handleChange} class="custom-range" min="2500" max="7500" step="500" data-toggle="tooltip" data-placement="top" title={this.value}/>    
                                    </div>
                                    <span class="endrange">7,500</span>
                                    </div>
                                    </div>
                        </div>
                        <div className="row">
                        <div className="mx-auto w-100 d-block">
                            <input name="rangeValue" className="mx-auto d-block mt-5 text-center" type="text" id="textInput" value={this.state.rangeValue} disabled/>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-sm-12 col-md-11">
                            <p>By Clicking 'Next' You agree to our <a href="/">privacy statement and electronic communication consent</a></p>
                            </div>
                            <div id="Next" className="col-sm-12 col-md-1">
                                <Link to ="/EmploymentDetails" className="button">Next</Link>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
         );
    }
}
 
export default AboutYou;