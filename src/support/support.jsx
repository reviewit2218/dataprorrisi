import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router'
import ContactUs from './contact';
import Account from './account';
import Security from './security';
import FAQ from './faq';
import HeaderBg from '../header/headerbg';
import Footer from '../footer/footer';
import history from '../history';
import Login from '../login/login';

const $ = window.$;

class Support extends Component {
    state = {  }
    componentDidMount(){
        $("#contactblock").addClass("leftborder");
    }
    HomeContainer(){
        history.push("/");
        
        if($( "#faqblock" ).hasClass( "leftborder" )||($( "#accountblock" ).hasClass( "leftborder" ))||($( "#securityblock" ).hasClass( "leftborder" )))
        {
            $("#faqblock").removeClass("leftborder");
            $("#accountblock").removeClass("leftborder");
            $("#securityblock").removeClass("leftborder");
            $("#contactblock").addClass("leftborder");
        }
    }
    AccountContainer(){
        if($( "#contactblock" ).hasClass( "leftborder" )||($( "#securityblock" ).hasClass( "leftborder" ))||($( "#faqblock" ).hasClass( "leftborder" )))
        {
            $("#contactblock").removeClass("leftborder");
            $("#securityblock").removeClass("leftborder");
            $("#faqblock").removeClass("leftborder");
            $("#accountblock").addClass("leftborder");
        }
        history.push("/Account");
    }
    SecurityContainer(){
        history.push("/Security");
        if($( "#contactblock" ).hasClass( "leftborder" )||($( "#accountblock" ).hasClass( "leftborder" ))||($( "#faqblock" ).hasClass( "leftborder" )))
        {
            $("#contactblock").removeClass("leftborder");
            $("#accountblock").removeClass("leftborder");
            $("#faqblock").removeClass("leftborder");
            $("#securityblock").addClass("leftborder");
        }
    }
    FAQContainer(){
        history.push("/FAQ");
        if($( "#contactblock" ).hasClass( "leftborder" )||($( "#accountblock" ).hasClass( "leftborder" ))||($( "#securityblock" ).hasClass( "leftborder" )))
        {
            $("#contactblock").removeClass("leftborder");
            $("#accountblock").removeClass("leftborder");
            $("#securityblock").removeClass("leftborder");
            $("#faqblock").addClass("leftborder");
        }
    }
    render() {
        return (
            
            <div id="support">
            <HeaderBg />
            <Router history={history}>
                <div className="row container pt-5 mx-auto d-flex justify-content-between">
                    <div className="col-sm-12 col-md-3 supportblock mr-4">
                        {/* <ul>
                            <li onClick={this.HomeContainer}>Contact Us <i class="fas fa-angle-right float-right"></i></li>
                            <li onClick={this.AccountContainer}>Account <i class="fas fa-angle-right"></i></li>
                            <li onClick={this.SecurityContainer}>Security <i class="fas fa-angle-right"></i></li>
                            <li onClick={this.FAQContainer}>FAQ <i class="fas fa-angle-right"></i></li>
                        </ul> */}

                        <div className="row w-100" id="contactblock">
                            <div className="col-10">
                            <p onClick={this.HomeContainer}>Contact Us</p>
                            </div>
                            <div className="col-2">
                            <i class="fas fa-angle-right" onClick={this.HomeContainer}></i>
                            </div>
                        </div>
                        <div className="row w-100" id="accountblock">
                            <div className="col-10">
                            <p onClick={this.AccountContainer}>Account</p>
                            </div>
                            <div className="col-2">
                            <i class="fas fa-angle-right" onClick={this.AccountContainer}></i>
                            </div>
                        </div>
                        <div className="row w-100" id="securityblock">
                            <div className="col-10">
                            <p onClick={this.SecurityContainer}>Security</p>
                            </div>
                            <div className="col-2">
                            <i class="fas fa-angle-right" onClick={this.SecurityContainer}></i>
                            </div>
                        </div>
                        <div className="row w-100" id="faqblock">
                            <div className="col-10">
                            <p onClick={this.FAQContainer}>FAQ</p>
                            </div>
                            <div className="col-2">
                            <i class="fas fa-angle-right" onClick={this.FAQContainer}></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8 supportblock">
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={ContactUs}/>
                            <Route exact path="/Account" component={Account}/>
                            <Route exact path="/Security" component={Security}/>
                            <Route path="/FAQ" component={FAQ}/>
                        </Switch>
                    </Router>
                    </div>
                </div>
                </Router>
                <Footer />
            </div>
           
        );
    }
}

export default Support;