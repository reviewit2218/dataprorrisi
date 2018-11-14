import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class HeaderBg extends Component {
    state = {  }
    render() { 
        return (<div id="headerbg">
            <div className="container pt-4">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="/">dataprorrisi</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Portfolio</a>
                        </li>
                        <li className="nav-item">
                        <Link to ="/Support" className="mt-4 button">Contact</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
            </div> 
         );
    }
}
 
export default HeaderBg;