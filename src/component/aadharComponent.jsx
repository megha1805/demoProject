import React from 'react';
import {Link} from "react-router-dom";

class AadharComponent extends React.Component {
    state = {
        aadhar: "878660758353",
        aadhar_img: "",
    }

    getData() {
        return {
            aadhar: this.state.aadhar,
            aadhar_image: this.state.aadhar_img,
        }
    }
    changeDetect=(event)=>{
            this.setState({aadhar_img: event.target.value});
    }
    render() {
        return (
            <div className="container">

                <div className="row col-6 mt-3">
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputAadhar">AadharNumber</label>
                            <input type="text" className="form-control" id="inputAadhar" placeholder="Aadhar number"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Images">Enter The Image</label>
                            <input type="file" className="form-control-file" id="Images" onChange={this.changeDetect}/>
                        </div>
                        <div className="form-row ">
                            <Link to="/pan">
                                <button type="submit" className="btn btn-primary "
                                        onClick={() => this.props.onSubmitClick("aadhar", this.getData())
                                        }>Save and Continue
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default AadharComponent;