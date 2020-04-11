import React from 'react';
import {Link} from "react-router-dom";

class PanCardComponent extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row col-6 mt-3">
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputPan">PanNumber</label>
                            <input type="text" className="form-control" id="inputPan" placeholder="Pan number"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Images">Enter The Image</label>
                            <input type="file" className="form-control-file" id="Images"/>
                        </div>
                        <div className="form-row ">
                            <Link to="/aadhar">
                                <button type="submit" className="btn btn-primary ">Previous</button>
                            </Link>
                            <button type="submit" className="btn btn-primary " onClick={this.submitData()}>submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    submitData() {
        return undefined;
    }
}


export default PanCardComponent;