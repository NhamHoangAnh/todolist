import React, { Component } from 'react'
import './body.css'
import { 
  Table
} from 'reactstrap'

export default class body extends Component {

  constructor(){
    super();
    this.state ={
      inputIndex:"",
      inputChange:"",
      todoList: [
        {
          name:"Buy Milk",
          nameChanged:"",
          checked: false
        },
        {
          name: "Buy Tea",
          nameChanged:"",
          checked: false
        }
      ]
    }
  }
  
  onChange =(event) =>{
    this.setState({
      inputIndex:event.target.value
    })
  }

  createNewJob =() =>{
    {/* let todoArray = this.state.todoList
    todoArray.push({
      name: this.state.inputIndex
    })
    this.setState({
      todoList: todoArray
    }) */}
    this.state.todoList.push({
      name: this.state.inputIndex,
      nameChanged:"",
      checked: false,
    })
    this.setState({
      todoList: this.state.todoList
    })
  }
  deleteTodo =(p) =>{
    this.state.todoList.splice(p, 1)
    this.setState({
      todoList: this.state.todoList
    })
  }
  onChangeAdjust =(event) =>{
    this.setState({
      inputChange: event.target.value
    })
  }
  changeTodo =() =>{
    let arrayChanged = [...this.state.todoList]
    arrayChanged.nameChanged = this.state.inputChange.valueOf()
    this.setState({
      todoList: this.state.arrayChanged
    })
  }
  handleCheck =(i) =>{
    var style
    let todoList = [...this.state.todoList]
    todoList.checked = true
    this.setState({todoList})
    if (todoList[i].checked === true){
      style = {textDecorationLine: "line-through"}
    }
  }
  
  render() {
    
    console.log(this.state)
    console.log(this.state.todoList)
    console.log(this.state.inputChange)
    return (
      <div id="body">
        <div>
          <input type="text" value={this.state.inputIndex} onChange={this.onChange}></input>
          <button onClick={this.createNewJob}>Create a new job</button>
        </div>
        <Table>
          <thead>
            <tr>
              <th><center>STT</center></th>
              <th><center>Job Check</center></th>
              <th><center>Job Name</center></th>
              <th><center>Day Begin</center></th>
              <th><center>Deadline</center></th>
              <th><center>Update</center></th>
              <th><center>Delete</center></th>
            </tr>
          </thead>
          <tbody>
            {this.state.todoList.map((item, index) =><tr key={index}>
              <td><center>{index + 1}</center></td>
              <td><center><input type="checkbox" onClick={this.handleCheck}/></center></td>
              <td><center>{item.nameChanged ? item.nameChanged : item.name}</center></td>
              <td></td>
              <td></td>
              <td><center><input type="text" onChange={this.onChangeAdjust} value={this.state.inputChange}/><button>Change</button></center></td>
              <td><center><button onClick={() =>this.deleteTodo(index)}>Delete</button></center></td>
            </tr>)}
          </tbody>
        </Table>
      </div>
    )
  }
}
