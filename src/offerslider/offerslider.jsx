import React, { Component } from 'react';
import homeloan from '../images/homeloan.png';
import personalloan from '../images/personalloan.png';
import carloan from '../images/carloan.png';

const $ = window.$;

class OfferSlider extends Component {
    componentDidMount(){
      
        $(document).ready(function() {
          
            $("#myCarousel").on("slide.bs.carousel", function(e) {
              
              var $e = $(e.relatedTarget);
              var idx = $e.index();
              var itemsPerSlide = 3;
              var totalItems = $(".carousel-item").length;
              if (idx >= totalItems - (itemsPerSlide - 1)) {
                var it = itemsPerSlide - (totalItems - idx);
                
                for (var i = 0; i < it; i++) {
                  
                  // append slides to end
                  if (e.direction == "left") {
                    
                    $(".carousel-item")
                   
                      .eq(i)
                      .appendTo(".carousel-inner");
                      
                  } else {
                    $(".carousel-item")
                      .eq(0)
                      .appendTo($(this).find(".carousel-inner"));
                      
                  }
                }
              }
            });
          });
          
    }
    state = {  }
    render() { 
        return ( <div>
            <div className="container clearfix">
  
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
    <li data-target="#myCarousel" data-slide-to="4"></li>
    <li data-target="#myCarousel" data-slide-to="5"></li>
  </ol>
    <div className="carousel-inner row w-100 mx-auto d-flex">
      <div className="carousel-item col-md-4 active">
        <div className="card">
          <img className="card-img-top img-fluid" src={personalloan} alt="Personal Loan" />
          <div className="card-body">
            <h4 className="card-title">Personal Loan</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nisi, dictum eu odio quis, iaculis vulputate turpis. Donec ultricies rutrum justo, vitae vehicula nunc fermentum in.</p>
          </div>
        </div>
      </div>
      <div className="carousel-item col-md-4">
        <div className="card">
          <img className="card-img-top img-fluid" src={homeloan} alt="Home Loan" />
          <div className="card-body">
            <h4 className="card-title">Home Loan</h4>
            <p className="card-text">Curabitur nec gravida erat. Sed dui nibh, pellentesque vitae rutrum sed, ullamcorper ut augue. Nulla eu sapien vel quam mollis cursus ultrices ac augue.</p>
          </div>
        </div>
      </div>
      <div className="carousel-item col-md-4">
        <div className="card">
          <img className="card-img-top img-fluid" src={carloan} alt="Car Loan" />
          <div className="card-body">
            <h4 className="card-title">Car Loan</h4>
            <p className="card-text">Praesent sit amet velit ac dolor semper pulvinar non ac mi. Cras purus urna, iaculis sit amet neque ultrices, porta placerat ex. Vivamus vehicula blandit nisl, a blandit nunc laoreet nec.</p>
          </div>
        </div>
      </div>
      <div className="carousel-item col-md-4">
        <div className="card">
          <img className="card-img-top img-fluid" src={personalloan} alt="Education Loan" />
          <div className="card-body">
            <h4 className="card-title">Education Loan</h4>
            <p className="card-text">Maecenas iaculis gravida mi at vehicula. Duis sed tempus metus. Suspendisse eu ante mattis, semper dolor luctus, facilisis ex. </p>
          </div>
        </div>
      </div>
      <div className="carousel-item col-md-4">
        <div className="card">
          <img className="card-img-top img-fluid" src={homeloan} alt="Marriage Loan" />
          <div className="card-body">
            <h4 className="card-title">Marriage Loan</h4>
            <p className="card-text">Vivamus eu magna id massa gravida porttitor ut ac ante. Nam at nulla vel lorem fermentum egestas ut non diam. Fusce vel sem vehicula, tincidunt nulla nec, auctor sapien. </p>
          </div>
        </div>
      </div>
      <div className="carousel-item col-md-4">
        <div className="card">
          <img className="card-img-top img-fluid" src={carloan} alt="SME Loan" />
          <div className="card-body">
            <h4 className="card-title">SME Loan</h4>
            <p className="card-text">Integer id purus mi. Maecenas ullamcorper elementum nisi id facilisis. Nam congue sagittis tortor, vitae iaculis orci commodo et. Fusce et nibh fermentum, aliquam purus et, dapibus enim. </p>
          </div>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <i className="fas fa-arrow-left"></i>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <i className="fas fa-arrow-right"></i>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
        </div> );
    }
}
 
export default OfferSlider;