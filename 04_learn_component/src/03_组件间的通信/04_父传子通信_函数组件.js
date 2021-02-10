import React, { Component } from 'react'

import PropTypes from 'prop-types'

function ChildCpn(props) {
  const {name, age, height} = props
  const {names} = props

  return (
    <div>
    <h2>{name + age + height}</h2>
      <ul>
        {
          names.map((item, index) => {
            return <li>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

ChildCpn.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="why2" age={18} height={1.88} names={[123,456]}/>
      </div>
    )
  }
}
