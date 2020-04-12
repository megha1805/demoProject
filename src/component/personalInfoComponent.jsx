import React from 'react';
import {Link} from "react-router-dom";

class PersonalInfoComponent extends React.Component {
    state = {
        firstName: "Gaurav",
        lastName: "Singh",
        emailId: "gaurav.singh74@infy",
        phn: "8295550459",
        address1: "ahdah",
        address2: "akfbj",
        address3: "mavdh",
    }

    getData() {
        return {
            name: this.state.firstName + " " + this.state.lastName,
            email: this.state.emailId,
            phn: this.state.phn,
            address: this.state.address1 + "," + this.state.address2 + "," + this.state.address3
        }
    }

    changeDetected = (event, field) => {
        this.setState({[field]: event.target.value});
    }

    render() {

        return (
            <div className="container">

                <div className="row col-6 mt-3">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputFName">FirstName</label>
                                <input type="text" value={this.state.firstName}
                                       onChange={(event) => this.changeDetected(event, 'firstName')} className="form-control"
                                       id="inputFName" placeholder="FirstName"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputLName">LastName</label>
                                <input type="text" value={this.state.lastName}
                                       onChange={(event) => this.changeDetected(event, 'lastName')} className="form-control"
                                       id="inputLName" placeholder="LastName"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" value={this.state.emailId}
                                       onChange={(event) => this.changeDetected(event, 'emailId')} className="form-control"
                                       id="inputEmail4" placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPoneNumber">PhoneNumber</label>
                                <input type="text" value={this.state.phn} onChange={(event) => this.changeDetected(event, 'phn')}
                                       className="form-control" id="inputPoneNumber"
                                       placeholder="PhoneNumber"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" value={this.state.address1}
                                   onChange={(event) => this.changeDetected(event, 'address1')} className="form-control"
                                   id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" value={this.state.address2}
                                   onChange={(event) => this.changeDetected(event, 'address2')} className="form-control"
                                   id="inputAddress2"
                                   placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Address 3</label>
                            <input value={this.state.address3} type="text"
                                   onChange={(event) => this.changeDetected(event, 'address3')} className="form-control"
                                   id="inputAddress3"
                                   placeholder="Apartment, studio, or floor"/>
                        </div>
                    </form>
                    <div className="text-center ">
                        <Link to="/aadhar">
                            <button className="btn btn-primary "
                                    onClick={() => this.props.onSubmitClick('personal', this.getData())}>Save and
                                Continue
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default PersonalInfoComponent;