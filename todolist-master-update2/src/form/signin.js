import React, { Component } from 'react'
import {Button, Col, Row, FormGroup, Label, Input, TabPane} from 'reactstrap'

export default class signin extends Component {
  render() {
    return (
        <TabPane tabId="1">
          <Row form>
              <Col>
                  <FormGroup>
                      <Label for="email" >Email</Label>
                      <br/>
                      <Input type="email" id="email" name = "email" placeholder = "email123@gmail.com"></Input>
                  </FormGroup>
              </Col>
          </Row> 
          <Row form>
          <Col>
                  <FormGroup>
                      <Label for="password">Password</Label>
                      <br/>
                      <Input type="password" id="password" name = "password" placeholder = "Enter your password..."></Input>
                  </FormGroup>
              </Col>
          </Row>  
          <Row form>
            <Col>
                <p>Forget password?</p>
            </Col>
          </Row>
          <Button style={{ marginTop: "10px" }} color="primary">Sign in</Button>
          </TabPane>
    )
  }
}
