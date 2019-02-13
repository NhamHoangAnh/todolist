import React, { Component } from 'react'
import { Col, Row, FormGroup, Label, Input, Button, TabPane } from 'reactstrap'

export default class signup extends Component {
    render() {
        return (
            <TabPane tabId="2">
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="input" >Name</Label>
                            <br />
                            <Input type="text" id="input" name="input" placeholder="ABC XYZ"></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="email" >Email</Label>
                            <br />
                            <Input type="email" id="email" name="email" placeholder="email123@gmail.com"></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="password" >Password</Label>
                            <br />
                            <Input type="password" id="password" name="password" placeholder="Enter your password..."></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="password" >Rewrite password</Label>
                            <br />
                            <Input type="password" id="password" name="password" placeholder="Enter your password..."></Input>
                        </FormGroup>
                    </Col>
                </Row>
                
                <Button style={{ marginTop: "10px" }} color="primary">Sign up</Button>
            </TabPane>


        )
    }
}
