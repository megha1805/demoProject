import React from 'react';
import {Container} from "react-bootstrap";
import './index.scss';

class Error404Component extends React.Component{
    render() {
        return (
            <Container>
                <div id={"mun-404"} className={"py-5"}>
                    <div className={"head-error"}>Oops!</div>
                    <div className={"error-text"}>The page you requested does not exist!</div>
                    <a className={"error-link"} href={"/"}>Click here to redirect to Home</a>
                </div>
            </Container>
        );
    }
}

export default Error404Component;
