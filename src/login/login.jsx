import React, { Component } from 'react';
import Header from '../header/header';
import finance from '../images/finance1.png';
import security from '../images/security1.png';
import report from '../images/report1.png';

const $ = window.$;
class Login extends Component {
    state = {  }
    componentDidMount (){
        $("#otpgroup").addClass('hideotp');
    }
    sendotp = () =>{
        $("#otpgroup").removeClass('hideotp');
        $('#otpbutton').hide();
    }
    render() {
        return (
            <div id="login">
                <Header />
                <div  className="container mt-5">
                    
                    <div id="logincontent">
                    <div className="topimage" ></div>
                        <div className="row d-flex  align-items-center" >
                            <div  className="col-md-4 " id="loginformimg" >
                            
                                <h3 className="text-center pt-5 pb-5 mt-5">login to your account</h3>
                                <div className="container">
                                <div class="form-group">
                                <select id="loginselect" class="custom-select">
                                    <option value="">USA (+1)</option>
                                    <option value="1">USA (+1)</option>
                                    <option value="2">USA (+1)</option>
                                    <option value="3">USA (+1)</option>
                                </select>  
                                </div>
                                <div class="form-group mb-5">
                                <input type="text" class="form-control" id="loginmobilenumber" placeholder="Mobile number" />
                                </div>
                                
                                <div class="form-group text-center" id="otpbutton">
                                <button type="button" class="button btn btn-primary" onClick={this.sendotp}>Send OTP</button>
                                </div>
                                <div id="otpgroup">
                                <label for="customotp" className="mt-4">Enter OTP Sent to your Mobile number</label>
                                <div class="form-group d-flex mb-5" id="otp">
                                
                                <input type="text" class="form-control" id="opt1" placeholder="" />
                                <input type="text" class="form-control" id="opt1" placeholder="" />
                                <input type="text" class="form-control" id="opt1" placeholder="" />
                                <input type="text" class="form-control" id="opt1" placeholder="" />
                                </div>
                                <div class="form-group text-center">
                                <button type="button" class="button btn btn-primary">Log In</button>
                                </div>
                                </div>
                                </div>
                            </div>
                            
                            <div className="col-md-8 " >
                            
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <img class="d-block mx-auto" src={finance} alt="First slide" />
                                    <div class="carousel-caption d-none d-md-block"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block mx-auto" src={security} alt="Second slide" />
                                    <div class="carousel-caption d-none d-md-block"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block mx-auto" src={report} alt="Third slide" />
                                    <div class="carousel-caption d-none d-md-block"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
                                    </div>
                                </div>
                                 
                                </div>
                             
                            </div>
                        </div>
                        <div className="bottomimage"></div>
                    </div>
                   
                </div>
            </div> 
        );
    }
}

export default Login;