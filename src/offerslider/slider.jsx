import React, { Component } from 'react';
import homeloan from '../images/homeloan.png';
import personalloan from '../images/personalloan.png';
import carloan from '../images/carloan.png';

class Slider extends Component {
    state = {  }
    
    render() { 
        return ( <div className="container">
            <div id="carouselExampleIndicators" class="carousel slide d-md-block d-sm-none" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    
                </ol>
    
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={personalloan} alt="Personal Loan" />
                                    <div className="card-body">
                                        <h4 className="card-title">Personal Loan</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nisi, dictum eu odio quis, iaculis vulputate turpis. Donec ultricies rutrum justo, vitae vehicula nunc fermentum in.</p>
                                    </div>
                                    </div>
                                </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={homeloan} alt="Home Loan" />
                                    <div className="card-body">
                                        <h4 className="card-title">Home Loan</h4>
                                        <p className="card-text">Curabitur nec gravida erat. Sed dui nibh, pellentesque vitae rutrum sed, ullamcorper ut augue. Nulla eu sapien vel quam mollis cursus ultrices ac augue.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={carloan} alt="Car Loan" />
                                    <div className="card-body">
                                        <h4 className="card-title">Car Loan</h4>
                                        <p className="card-text">Praesent sit amet velit ac dolor semper pulvinar non ac mi. Cras purus urna, iaculis sit amet neque ultrices, porta placerat ex. Vivamus vehicula blandit nisl, a blandit nunc laoreet nec.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={personalloan} alt="Personal Loan" />
                                    <div className="card-body">
                                        <h4 className="card-title">Personal Loan</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nisi, dictum eu odio quis, iaculis vulputate turpis. Donec ultricies rutrum justo, vitae vehicula nunc fermentum in.</p>
                                    </div>
                                    </div>
                                </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={homeloan} alt="Home Loan" />
                                    <div className="card-body">
                                        <h4 className="card-title">Home Loan</h4>
                                        <p className="card-text">Curabitur nec gravida erat. Sed dui nibh, pellentesque vitae rutrum sed, ullamcorper ut augue. Nulla eu sapien vel quam mollis cursus ultrices ac augue.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={carloan} alt="Car Loan" />
                                    <div className="card-body">
                                        <h4 className="card-title">Car Loan</h4>
                                        <p className="card-text">Praesent sit amet velit ac dolor semper pulvinar non ac mi. Cras purus urna, iaculis sit amet neque ultrices, porta placerat ex. Vivamus vehicula blandit nisl, a blandit nunc laoreet nec.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
            </div>
            <div id="carouselExampleIndicators1" class="carousel slide d-sm-block d-none d-lg-none d-md-none" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                    
                </ol>
    
                <div class="carousel-inner">
                    <div class="carousel-item active">
                         
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={personalloan} alt="Personal Loan" />
                                    <div className="card-body">
                                        <h4 className="card-title">Personal Loan</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nisi, dictum eu odio quis, iaculis vulputate turpis. Donec ultricies rutrum justo, vitae vehicula nunc fermentum in.</p>
                                    </div>
                                    </div>
                              </div>
                              <div class="carousel-item">   
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={homeloan} alt="Home Loan" />
                                    <div className="card-body">
                                        <h4 className="card-title">Home Loan</h4>
                                        <p className="card-text">Curabitur nec gravida erat. Sed dui nibh, pellentesque vitae rutrum sed, ullamcorper ut augue. Nulla eu sapien vel quam mollis cursus ultrices ac augue.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={carloan} alt="Car Loan" />
                                    <div className="card-body">
                                        <h4 className="card-title">Car Loan</h4>
                                        <p className="card-text">Praesent sit amet velit ac dolor semper pulvinar non ac mi. Cras purus urna, iaculis sit amet neque ultrices, porta placerat ex. Vivamus vehicula blandit nisl, a blandit nunc laoreet nec.</p>
                                    </div>
                                </div>
                            
                    </div>
                     
                    
                </div>

                    <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
            </div>
            </div>
         );
    }
}
 
export default Slider;