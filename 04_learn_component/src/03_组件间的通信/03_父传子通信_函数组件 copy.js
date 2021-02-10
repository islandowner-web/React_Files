import React, { Component } from 'react'

function ChildCpn(props) {
  const {name, age, height} = props

  return (
    <h2>{name + age + height}</h2>
  )
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
