import React from 'react';
import reactDOM from 'react-dom';
import {Link} from "react-router-dom";

class SignupComponent2 extends React.Component {

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
                            <label htmlFor="inputPan">PanNumber</label>
                            <input type="text" className="form-control" id="inputPan" placeholder="Pan number"/>
                        </div>

                        <div class="form-group">
                            <label for="Images">Enter The Image</label>
                            <input type="file" class="form-control-file" id="Images"/>
                        </div>
                        <div className="text-center ">
                            <Link to="/home">
                                <button type="submit" className="btn btn-primary ">submit</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default SignupComponent2;