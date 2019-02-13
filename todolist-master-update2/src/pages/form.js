import React, { Component } from 'react'
import Form from '../form/form'
import './form.css'
import { Link } from 'react-router-dom'
export default class form extends Component {
  render() {
    return (
      <div className="background">
        <Link to="/" style={{textDecoration: "none"}}>
          <p style={{paddingTop: "15px", textAlign: "center", fontSize: "40px", color: "white" }}><b>TO DO LIST</b></p>
        </Link>
        <Form />
      </div>
    )
  }
}
