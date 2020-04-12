import React from 'react';
import {Link} from "react-router-dom";

class WholeInfoComponent extends React.Component {
    render() {
        // name: null,
        //     email: null,
        //     phn: null,
        //     address: null,
        //     aadhar: null,
        //     aadhar_image: null,
        //     pan: null,
        //     pan_image: null
        return (
            <div className="container">

                <div className="row-col-4 mt-3">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Full Name</label>
                                <label className="form-control">{this.props.data.name}</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <label className="form-control">{this.props.data.email}</label>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPoneNumber">PhoneNumber</label>
                                <label className="form-control">{this.props.data.phn}</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <label className="form-control">{this.props.data.address}</label>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Aadhar Number</label>
                                <label className="form-control">{this.props.data.aadhar}</label>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPoneNumber">PAN Card Number</label>
                                <label className="form-control">{this.props.data.pan}</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Aadhar Image</label>
                                <img src={this.props.data.aadhar_image}></img>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">PAN Image</label>
                                <img src={this.props.data.pan_image}></img>
                            </div>
                        </div>
                        <Link to="/">
                            <button type="submit" className="btn btn-disabled ml-2 ">Edit</button>
                        </Link>
                        <Link to="/success">
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                        </Link>

                    </form>
                </div>
            </div>
        );
    }
}

export default WholeInfoComponent;