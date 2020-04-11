import React from 'react';
import {Container} from "react-bootstrap";
import './index.scss'

class Error500Component extends React.Component{
    render() {
        return (
            <Container>
        <div id={"mun-500"} className={"py-5"}>
            <div className={"head-error"}>Oops!</div>
            <div className={"error-text"}>We've encountered an error!</div>
            <a className={"error-link"} href={"/"}>Click here to redirect to Home</a>
        </div>
            </Container>
        );
    }
}

export default Error500Component;
