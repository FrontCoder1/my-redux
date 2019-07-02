import React, { Component } from 'react';
import {addNum, deNum} from './store/actions/num'
import {updateOption} from './store/actions/option'
import {updateAge,updateName,recerverUSer} from './store/actions/user'
import {connect} from 'react-redux'


class App extends Component {
  
  

  // handleChange = (el)=>{
  //   this.setState({
  //     currentOption: el.target.value
  //   })
  // }

  // handleAdd = ()=>{
  //   this.setState({
  //     num: +this.state.currentOption+this.state.num
  //   })
  // }

  // handleDe = ()=>{
  //   this.setState({
  //     num: +this.state.num-this.state.currentOption
  //   })
  // }

  // handleChangeName = (el) => {
  //   this.setState({
  //     user:{...this.state.user,name:el.target.value}
  //   })
  // }

  // handleChangeAge = (el) => {
  //   this.setState({
  //     user:{...this.state.user,age:el.target.value}
  //   })
  // }

  componentDidMount() {
    this.props.getUsers()
  } 

  render() {
    const {num, user, currentOption} = this.props;
    const {name, age} = user;
    return (
      <div>
        <p>当前数量为{num}个</p>
        <p>msg: name:{name},age:{age}</p>
        <div>
          <select onChange={this.props.handleChange} value={currentOption}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          <button onClick={()=>this.props.handleAdd(currentOption)}>增加</button>
          <button onClick={()=>this.props.handleDe(currentOption)}>减少</button>
          name:<input onChange={this.props.handleChangeName} value={name}/>
          age: <input onChange={this.props.handleChangeAge} value={age}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state=>{ // state 是什么
  return {
    num: state.num,
    user: state.user,
    currentOption: state.option
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (el)=>{
        dispatch(updateOption(el.target.value))
    },
    handleAdd: (val)=>{
      dispatch(addNum(val))
    },
  
    handleDe: (val)=>{
      dispatch(deNum(val))
    },
    handleChangeName: (el) => {
        dispatch(updateName(el.target.value))
    },
  
    handleChangeAge: (el) => {
      dispatch(updateAge(el.target.value))
    },
    getUsers: (el) => {
      dispatch(recerverUSer(el))
    }
  }
}
// export default App;
export default connect(mapStateToProps,mapDispatchToProps)(App)
