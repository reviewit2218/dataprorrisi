import React, { Component } from 'react';
import contact from '../images/mailbox.svg';

class ContactUs extends Component {
    state = {  }
    render() {
        return (
            <div id="ContactUs">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h1 className="pt-3 pb-3">Drop a Line!</h1>
                        <form className="mb-5">
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" rows="10" placeholder="Your message..."></textarea>
                            </div>
                            <button type="submit" class="button btn btn-primary">Send Mail</button>
                            </form>
                    </div>
                    <div className="col-sm-12 col-md-6 ">
                        <img src={contact} alt="contact form" className="img-fluid" />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;