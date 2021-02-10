import React, { Component } from 'react'

class Cpn extends Component {
  render() {
    return <h2>Cpn组件</h2>
  }

  componentWillMount() {
    console.log('componentWillMount方法 组件卸载前执行')
  }

}


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      counter: 0,
      isShow: true
    }

    console.log('constructor方法')
  }

  render() {
    console.log('render方法')

    return (
      <div>
        App
        <h2>计数器: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <hr/>
        <button onClick={e => this.changeCpnShow()}>切换</button>
        {this.state.isShow && <Cpn/>}
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeCpnShow() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  componentDidMount() {
    console.log('componentDidMount方法')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate组件更新 方法')
  }


}
