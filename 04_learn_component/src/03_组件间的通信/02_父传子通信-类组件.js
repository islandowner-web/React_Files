import React, { Component } from 'react'


class ChildCpn extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state={}
  // }

  render() {
    // 解构
    const {name, age, height} = this.props

    return (
      <h2>子组件展示数据: {name + " " + age + " " + height}</h2>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="why" age="18" height="1.8"/>
        <ChildCpn name="why2" age="182" height="1.82"/>
      </div>
    )
  }
}
