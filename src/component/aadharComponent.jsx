import React from 'react';
import {Link} from "react-router-dom";

class AadharComponent extends React.Component {

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
                            <input type="file" className="form-control-file" id="Images"/>
                        </div>
                        <div className="form-row ">
                            <Link to="/personal">
                                <button type="submit" className="btn btn-primary ">Previous</button>
                            </Link>
                            <Link to="/pan">
                                <button type="submit" className="btn btn-primary ">Save and Continue</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default AadharComponent;