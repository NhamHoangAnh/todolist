import React, { Component } from 'react'
import './header.css'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
export default class home extends Component {

  render() {
    return (
      <div className="container-fluid" id="header">
        <div className="row">
          <div className="col-md-10" >
            <i className="fas fa-tasks" style={{ marginRight: "10px" }}></i>
           <Link to="/" style={{textDecoration: "none", color: "white"}}><b> TO DO LIST</b></Link> 
          </div>
          <div className="col-md-2">
            <Link to="/form">
              <Button style={{ fontSize: "20px", padding: "2px 20px" }} color="light">Sign in</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
