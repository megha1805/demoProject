import React from 'react';
import {Link} from "react-router-dom";

class PersonalInfoComponent extends React.Component {
    render() {
        return (
            <div className="container">

                <div className="row col-6 mt-3">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputFName">FirstName</label>
                                <input type="text" className="form-control" id="inputFName" placeholder="FirstName"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputLName">LastName</label>
                                <input type="text" className="form-control" id="inputLName" placeholder="LastName"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPoneNumber">PhoneNumber</label>
                                <input type="text" className="form-control" id="inputPoneNumber"
                                       placeholder="PhoneNumber"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2"
                                   placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Address 3</label>
                            <input type="text" className="form-control" id="inputAddress2"
                                   placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="text-center ">
                            <Link to="/aadhar">
                                <button type="submit" className="btn btn-primary ">Save and Continue</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default PersonalInfoComponent;