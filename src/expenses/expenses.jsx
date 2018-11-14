import React, { Component } from 'react';
import HeaderBg from '../header/headerbg';
import Footer from '../footer/footer';
import { Link} from 'react-router-dom';

const $ = window.$;

class Expenses extends Component {
    state = {  }
    componentDidMount(){
        window.scrollTo(0, 0);
        $("#paymentToggle").click(function(){
            $( "#paymentDiv" ).toggle();
        });
        $("#mortgageToggle").click(function(){
           $( "#addfinance" ).toggle();
           $( "#remove1" ).toggle();
           $( "#submit1" ).toggle();
        });
        $("#loanToggle").click(function(){
            $( "#addmortgage" ).toggle();
            $( "#remove2" ).toggle();
            $( "#submit2" ).toggle();
            $( "#consolidateloan" ).toggle();
        });
        $("#submit1").click(function(){
            $( "#finance" ).clone().appendTo("#addfinance");
        });
        $("#remove1").click(function(){
            $( "#finance" ).remove();
        });
        $("#submit2").click(function(){
            $( "#mortgage" ).clone().appendTo("#addmortgage");
        });
        $("#remove2").click(function(){
           $( "#mortgage" ).remove();
        });
    }
    render() {
        return (
            <div id="yourExpenses">
                <HeaderBg />
                <h1 className="loanTitle mt-5 pl-5"><span className="formNumber">5</span> expenses &amp; loans</h1>
                <div className="container pt-5">
                    <form className="mx-auto" id="expenses">
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <div class="form-group">
                                    <label htmlFor="exampleInputPassword1">Monthly living expenses</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="$0" />
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div class="form-group">
                                    <label htmlFor="exampleInputPassword1">Monthly health and life insurances</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="$0" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label htmlFor="exampleInputPassword1">Monthly childcare, school fees, child support</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="$0" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label htmlFor="exampleInputPassword1">Other monthly expenses</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="$0" />
                                </div>
                            </div>
                        </div>
                        <div class="pb-3">
                            <label class="switch">
                            <input type="checkbox" id="paymentToggle" />
                            <span class="slider"></span>
                            </label>
                            i have rental payments
                        </div>
                        <div id="paymentDiv">
                            <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <div class="form-group">
                                <label htmlFor="exampleInputYears">Frequency</label>
                                <select class="custom-select">
                                    <option value="">please select</option>
                                    <option value="1">Weekly</option>
                                            <option value="2">Fortnightly</option>
                                            <option value="3">Monthly</option>
                                </select>  
                                </div>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <div class="form-group">
                                <label htmlFor="exampleInputPassword1">Amount</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="$0" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="pb-3">
                            <label class="switch">
                                <input type="checkbox" id="mortgageToggle" />
                                <span class="slider"></span>
                            </label>
                            I have mortgage payments
                        </div>

                        <div id="addfinance">
                        <div id="finance">
                                <div class="row" >
                        <div class="col-sm-12 col-md-6">
                        <div class="form-group">
                            <label htmlFor="exampleInputEmail1">Name of financial institution</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-sm-12 col-md-6">
                        <div class="form-group">
                            <label htmlFor="exampleInputPassword1">Amount Owing</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="$0" />
                        </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                        <div class="form-group">
                            <label htmlFor="exampleInputPassword1">Monthly payments</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="$0" />
                            </div>
                        </div>
                        </div>
                        </div>
                        
                    </div>
                        <div class="pb-3">
                            <a id="remove1" class="text-danger">remove mortgage above</a>
                        </div>
                        <div class="pb-3">
                            <a id="submit1" class="text-primary">+ add another mortgage</a>
                        </div>
                        <div class="pb-3">
                        <label class="switch">
                            <input type="checkbox" id="loanToggle" />
                            <span class="slider"></span>
                        </label>
                        Any Personal or Car loans?
                    </div>
                        <div id="addmortgage">
                            <div id="mortgage">
                            <div class="row">
                            <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label htmlFor="exampleInputEmail1">name of financial institution</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label htmlFor="exampleInputPassword1">total loan amount</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="$0" />
                            </div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                            <label htmlFor="exampleInputEmail1">amount owing</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="$0" />
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                            <label htmlFor="exampleInputPassword1">monthly repayment amount</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="$0" />
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div class="custom-control custom-checkbox pb-2" id="consolidateloan"> 
                        <input type="checkbox" class="custom-control-input"  />
                        <label class="custom-control-label" for="customCheck1">consolidate this loan</label>
                        </div>
                        
                        
                        <div class="pb-3">
                            <a id="remove2" class="text-danger">remove mortgage above</a>
                            </div>
                            <div class="pb-3">
                            <a id="submit2" class="text-primary">+ add another mortgage</a>
                            </div>
                        <div className="row pt-5">
                            <div id="Next" className="col-sm-12">
                                <Link to ="/CreditCards" className="button">Next</Link>
                            </div>
                        </div>
                    </form>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Expenses;