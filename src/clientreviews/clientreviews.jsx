import React, { Component } from 'react';
import john from '../images/john.png';
import james from '../images/james.png';
import lisa from '../images/lisa.png';

class ClientReviews extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="clientreview" className="text-center container pt-5">
                <h1>CLIENT REVIEWS</h1> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis posuere velit vitae suscipit. Donec cursus suscipit sapien, sollicitudin tincidunt neque scelerisque vitae. Aliquam non nisi dolor. Integer nec ultricies dolor. Etiam nec tortor risus. Suspendisse at massa vel purus sagittis molestie vel nec enim. Aliquam elementum consectetur velit, in blandit elit tincidunt fermentum.</p>
                <div className="row pt-5">
                    <div className="col-md-4 mb-5">
                        <div className="card">
                        <div className="row">
                            <div className="col-sm-2">
                                <img className="card-img-top" src={john} alt="John Doe" />
                            </div>
                            <div className="col-sm-10 text-left align-self-center">
                                <p>John Doe</p>
                                <small>Investor</small>
                            </div>
                        </div>
                            
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>  
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card">
                        <div className="row">
                            <div className="col-sm-2">
                                <img className="card-img-top" src={james} alt="James Smith" />
                            </div>
                            <div className="col-sm-10 text-left align-self-center">
                                <p>James Smith</p>
                                <small>Investor</small>
                            </div>
                        </div>
                            
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>  
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card">
                        <div className="row">
                            <div className="col-sm-2">
                                <img className="card-img-top" src={lisa} alt="Lisa Smith" />
                            </div>
                            <div className="col-sm-10 text-left align-self-center">
                                <p>Lisa Smith</p>
                                <small>Investor</small>
                            </div>
                        </div>
                            
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ClientReviews;