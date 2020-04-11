import React from "react";
import ReactDOM from 'react-dom';
import Navigation from "./navigation";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignupComponent from './signupcomponent';
import SignupComponent2 from './signupcomponent2';

class AppConfig extends React.Component{
    render(){
        return(
            <div>
                    <Router>
                    <Navigation> </Navigation>
                        <Route path="/" exact component={SignupComponent}/>
                        <Route path="/signup" exact component={SignupComponent}/>
                        <Route path="/signup/AadharDetails" component={SignupComponent2}/>


                    </Router>
            </div>
        );

    }

}
export default AppConfig;