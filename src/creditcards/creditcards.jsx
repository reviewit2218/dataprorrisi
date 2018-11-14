import React, { Component } from 'react';
import HeaderBg from '../header/headerbg';
import Footer from '../footer/footer';
import { Link} from 'react-router-dom';

const $ = window.$;

class CreditCards extends Component {
    state = {  }
    componentDidMount(){
        window.scrollTo(0, 0);
        $("#submit3").click(function(){
            $( "#creditcard" ).clone().appendTo("#addcreditcard");
        });
        $("#remove3").click(function(){
            $( "#creditcard" ).remove();
        });
        $("#creditcardToggle").click(function(){
            $( "#addcreditcard" ).toggle();
            $( "#payoffcredit" ).toggle();
            $( "#remove3" ).toggle();
            $( "#submit3" ).toggle();
        });
    }
    render() {
        return (
            <div id="credit">
                <HeaderBg />
                <h1 className="loanTitle mt-5 pl-5"><span className="formNumber">6</span> credit cards</h1>
                <div className="container pt-5">
                    <form className="mx-auto" id="expenses">
                    <div class="pb-3">
                        <label class="switch">
                        <input type="checkbox" id="creditcardToggle" />
                        <span class="slider"></span>
                        </label>
                        I have Credit cards
                    </div>

                    <div id="addcreditcard">
                       <div id="creditcard">
                        <div class="row" >
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                            <label htmlFor="exampleInputEmail1">Name of Financial Institution</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                            <label htmlFor="exampleInputPassword1">Credit Card Limit</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="$0" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                            <label htmlFor="exampleInputPassword1">Amount Owing</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="$0" />
                            </div>
                        </div>
                        </div>
                        </div> 
                        </div>
                        <div class="custom-control custom-checkbox pb-2" id="payoffcredit">
                        <input type="checkbox" class="custom-control-input"  />
                        <label class="custom-control-label" for="customCheck1">i want to pay off this credit card with this loan</label>
                        </div>
                   
                    <div class="pb-3">
                        <a id="remove3" class="text-danger">remove card above</a>
                    </div>
                    <div class="pb-3">
                        <a id="submit3" class="text-primary">+ add another credit card</a>
                    </div>
                    
                   


                    
                            
                    <div className="row pt-5">
                            <div id="Next" className="col-sm-12">
                                <Link to ="/SubmitSuccess" className="button">AGREE &amp; SUBMIT</Link>
                            </div>
                        </div>

                    </form>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default CreditCards;