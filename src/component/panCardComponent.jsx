import React from 'react';

class PanCardComponent extends React.Component {
    state = {
        pan: "878660758353",
        pan_image: "",
    }

    getData() {
        return {
            pan: this.state.pan,
            pan_image: this.state.pan,
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
                            <label htmlFor="inputPan">PanNumber</label>
                            <input type="text" className="form-control" id="inputPan" placeholder="Pan number"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Images">Enter The Image</label>
                            <input type="file" onChange={this.changeDetect} className="form-control-file" id="Images"/>
                        </div>
                        <div className="form-row ">
                            <button disabled={this.props.onSubmitEnable()} type="submit" className="btn btn-primary "onClick={() => this.props.onSubmitClick("pan",this.getData())}>submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}


export default PanCardComponent;