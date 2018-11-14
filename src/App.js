import React, { Component } from 'react';
import {  BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import './styles/style.css';
import Home from './home';
import history from './history';
import AboutYou from './applyloan/aboutyou';
import EmploymentDetails from './employmentdetails/employmentdetails';
import VerifyId from './verifyid/verifyid';
import Income from './income/income';
import Expenses from './expenses/expenses';
import CreditCards from './creditcards/creditcards';
import SubmitSuccess from './submitsuccess/submitsuccess';
import Support from './support/support';
import Account from './support/account';
import Login from './login/login';
import ContactUs from './support/contact';

class App extends Component {
    
  render() {
    return (
      <Router history={history}>
      <div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/AboutYou' component={AboutYou}></Route>
          <Route path='/EmploymentDetails' component={EmploymentDetails}></Route>
          <Route path='/VerifyId' component={VerifyId}></Route>
          <Route path='/Income' component={Income}></Route>
          <Route path='/Expenses' component={Expenses}></Route>
          <Route path='/CreditCards' component={CreditCards}></Route>
          <Route path='/SubmitSuccess' component={SubmitSuccess}></Route>
          <Route exact path='/Support' component={Support}></Route>
          <Route path="/Account" component={Account}/>
          <Route  path="/Login" component={Login}/>
          
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
