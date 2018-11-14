import React, { Component } from 'react';
import HeaderBg from '../header/headerbg';
import Footer from '../footer/footer';
import { Link} from 'react-router-dom';

const $ = window.$;

class Income extends Component {
    state = {  }
    componentDidMount (){
        $("#submit").click(function(){
            $( "#incomes" ).clone().appendTo("#addincome");
        });
        $("#remove").click(function(){
            $( "#incomes" ).remove();
        });
        $("#incomeOnOff").click(function(){
           $( "#addincome" ).toggle();
           $( "#remove" ).toggle();
           $( "#submit" ).toggle();
        });
        $("#partnerIncome").click(function(){
            $( "#partnerClass" ).toggle();
        });
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div id="yourIncome">
                <HeaderBg />
                <h1 className="loanTitle mt-5 pl-5"><span className="formNumber">4</span> income</h1>
                <div className="container pt-5">
                    <form className="mx-auto" id="formAboutYou">
                    <div className="row">
                    <div class="form-group col-sm-12 col-md-6 ">
                    <label htmlFor="exampleInputEmail1">Income Frequency</label>
                            <select class="custom-select" required>
                            <option value="">please select</option>
                                <option value="1">Weekly</option>
                                <option value="2">Fortnightly</option>
                                <option value="3">Monthly</option>
                            </select> 
                        </div>
                    </div>

                    <div className="row">
                    <div class="form-group col-sm-12 col-md-6 ">
                        <label for="licence">Income before Tax</label>
                        <input type="text" class="form-control" id="licence" aria-describedby="licence" placeholder="$0" />
                        </div>
                    </div>

                    <div className="row">
                    <div class="form-group col-sm-12 col-md-6 ">
                        <label for="licence">Employer Name</label>
                        <input type="text" class="form-control" id="licence" aria-describedby="licence" placeholder="Enter name" />
                        </div>
                    </div>

                    <div class="pb-3">
                    <label class="switch">
                        <input type="checkbox" id="incomeOnOff"/>
                        <span class="slider"></span>
                    </label>
                    i have more types of income
                    </div>
                    
                    <div id="addincome">
                        <div class="row" id="incomes">
                        <div class="col">
                        <div class="form-group">
                            <label htmlFor="exampleInputYears">income type</label>
                            <select class="custom-select">
                            <option value="">please select</option>
                            <option value="1">Rent</option>
                            <option value="2">Fixed Deposit</option>
                            <option value="3">PartnerIncome</option>
                            </select>  
                        </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                        <div class="form-group">
                            <label htmlFor="exampleInputYears">income frequency</label>
                            <select class="custom-select">
                            <option value="">please select</option>
                            <option value="1">Weekly</option>
                                <option value="2">Fortnightly</option>
                                <option value="3">Monthly</option>
                            </select>  
                        </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                        <div class="form-group">
                            <label htmlFor="exampleInputPassword1">amount</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="$0" />
                        </div>
                        </div>
                        </div>
                        
                    </div>
                    <div class="pb-3">
                            <a id="remove" class="text-danger">remove income above</a>
                    </div>
                    <div class="pb-3">
                        <a id="submit" class="text-primary">+ add another income</a>
                    </div>
                    
                    
                    <div class="pb-3">
                        <label class="switch">
                        <input type="checkbox" id="partnerIncome"/>
                        <span class="slider"></span>
                        </label>
                        my partner has an income
                    </div>

                     <div id="partnerClass">
                        <div class="row">
                        <div class="col-md-6 col-sms-12">
                            <div class="form-group">
                            <label htmlFor="exampleInputYears">frequency</label>
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
                        <div class="col-md-6 col-sms-12">
                            <div class="form-group">
                            <label htmlFor="exampleInputPassword1">amount</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="$0" />
                            </div>
                        </div>
                        </div>
                        </div>
                    
                        <div className="row pt-5">
                            <div id="Next" className="col-sm-12">
                                <Link to ="/Expenses" className="button">Next</Link>
                            </div>
                        </div>
                    </form>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Income;