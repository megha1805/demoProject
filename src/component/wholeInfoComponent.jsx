import React from 'react';
import {Col, Container, Form, Image, Row} from "react-bootstrap"

class WholeInfoComponent extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" readOnly defaultValue={this.props.data.name}/>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label>Email Id</Form.Label>
                                <Form.Control type="text" readOnly defaultValue={this.props.data.emailId}/>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" readOnly defaultValue={this.props.data.phn}/>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label>Address</Form.Label>
                                <Form.Control as="textarea" rows="3" disabled={true}
                                              defaultValue={this.props.data.address}/>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label>Aadhar Number</Form.Label>
                                <Form.Control as="text" readOnly defaultValue={this.props.data.aadhar}/>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label>PAN Number</Form.Label>
                                <Form.Control as="text" readOnly defaultValue={this.props.data.pan}/>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label>PAN Image</Form.Label>
                                <Col xs={6} md={4}>
                                    <Image src="holder.js/171x180" rounded/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label>Aadhar Image</Form.Label>
                                <Col xs={6} md={4}>
                                    <Image src="holder.js/171x180" rounded/>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default WholeInfoComponent;