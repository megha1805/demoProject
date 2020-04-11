import React from "react";
import NavigationComponent from "./component/navigationComponent";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PanCardComponent from './component/panCardComponent';
import PersonalInfoComponent from './component/personalInfoComponent';
import AadharComponent from "./component/aadharComponent";

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <NavigationComponent> </NavigationComponent>
                    <Route path="/" exact component={PersonalInfoComponent}/>
                    <Route path="/signup" exact component={PersonalInfoComponent}/>
                    <Route path="/signup/pan" component={PanCardComponent}/>
                    <Route path="/signup/aadhar" component={AadharComponent}/>
                </Router>
            </div>
        );

    }

}

export default App;