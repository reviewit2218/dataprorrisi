import React, { Component } from 'react';
import Header from './header/header';
import GetYourLoan from './getyourloan/getyourloan';
import WhatWeOffer from './whatweoffer/whatweoffer';
import WhyChooseUs from './whychooseus/whychooseus';
import FastSecureConvenient from './fastsecureconvenient/fastsecureconvenient';
import ClientReviews from './clientreviews/clientreviews';
import Footer from './footer/footer';


class Home extends Component {
    state = {  }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() { 
        return (
            <div id="topbg">
                <Header />
                <GetYourLoan/>
                <WhatWeOffer/>
                <WhyChooseUs />
                <FastSecureConvenient/>
                <ClientReviews />
                <Footer />
            </div>
          );
    }
}
 
export default Home;
