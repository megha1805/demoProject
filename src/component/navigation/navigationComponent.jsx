import React from "react";
import "./index.scss"
import {BrowserRouter as Router, Link} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import PersonalInfoComponent from "../personalInfoComponent";
import PanCardComponent from "../panCardComponent";
import AadharComponent from "../aadharComponent";
import Redirect from "react-router-dom/es/Redirect";
import WholeInfoComponent from "../wholeInfoComponent";

class NavigationComponent extends React.Component {
    state = {
        personal: false,
        aadhar: false,
        pan: false,
        selected: 1,
        data: {
            name: null,
            email: null,
            phn: null,
            address: null,
            aadhar: null,
            aadhar_image: null,
            pan: null,
            pan_image: null
        }
    }

    setButtonClass(index) {
        if (index === 1 && this.state.personal) {
            return 'btn-disabled1'
        }
        if (index === 2 && this.state.aadhar) {
            return 'btn-disabled1'
        }
        if (index === 3 && this.state.pan) {
            return 'btn-disabled1'
        }
        if (index === this.state.selected) {
            return 'btn-primary'
        } else
            return 'btn-default'
    }


    setDisable = (field, data) => {
        let a = JSON.parse(JSON.stringify(this.state))
        a[field] = true
        console.log(field)
        if (field === 'personal') {
            console.log("setting")
            a['selected'] = 2
        } else {
            a['selected'] = 3
        }
        let stateData = a.data
        Object.keys(data).map(key => {
            stateData[key] = data[key]
        })
        a.data = stateData

        this.setState(a);
    }
    getDisable = (field) => {
        console.log(125)
        return this.state[field];
    }

    setEnable = () => {
        if (this.state.personal && this.state.aadhar) {
            return false;
        }
        return true;
    }


    redirect() {
        if (this.state.selected === 1) {
            return <Redirect to="/"/>;
        }

        if (this.state.pan ===true && this.state.aadhar ===true && this.state.personal===true) {
            return <Redirect to="/confirm"/>;
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <div className="container" hidden={this.state.pan ===true && this.state.aadhar ===true && this.state.personal===true}>
                        {this.redirect()}
                        <div className="stepwizard col-md-offset-3">
                            <div className="stepwizard-row setup-panel">
                                <div className="stepwizard-step">
                                    <Link to='/'>
                                        <button className={"btn btn-circle " + this.setButtonClass(1)}
                                                onClick={() => this.setState({selected: 1})}
                                                disabled={this.state.personal}>1
                                        </button>
                                    </Link>
                                    <p>Personal Info</p>
                                </div>
                                <div className="stepwizard-step">
                                    <Link to='/aadhar'>
                                        <button className={"btn btn-circle " + this.setButtonClass(2)}
                                                disabled={this.state.aadhar}
                                                onClick={() => this.setState({selected: 2})}>
                                            2
                                        </button>
                                    </Link>
                                    <p>Aadhar Info</p>
                                </div>
                                <div className="stepwizard-step">
                                    <Link to="/pan">
                                        <button className={"btn btn-circle " + this.setButtonClass(3)}
                                                disabled={this.state.pan} onClick={() => this.setState({selected: 3})}>
                                            3
                                        </button>
                                    </Link>
                                    <p>Pan Info</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Route path="/" exact component={() => <PersonalInfoComponent onSubmitClick={this.setDisable}

                    />}/>
                    <Route path="/aadhar" component={() => <AadharComponent onSubmitClick={this.setDisable}
                                                                            getDisable={this.getDisable}

                    />}/>
                    <Route path="/pan" component={() => <PanCardComponent onSubmitEnable={this.setEnable}
                                                                          onSubmitClick={this.setDisable}
                                                                          onSubmitClick={this.setDisable}
                                                                          getDisable={this.getDisable}
                    />}/>
                    <Route path="/confirm" component={() => <WholeInfoComponent data ={this.state.data}/>}/>
                </Router>
            </div>
        );
    }
}


export default NavigationComponent;