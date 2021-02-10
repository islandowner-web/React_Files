import React, { Component } from 'react'

// Header
function Header() {
  return <h2>我是Header</h2>
}

// Main
function Banner() {
  return <h2>我是Banner</h2>
}

function ProductList() {
  return (
    <ul>
      <li>List1</li>
      <li>List2</li>
      <li>List3</li>
      <li>List4</li>
      <li>List5</li>
    </ul>
  )
}

function Main() {
  return (
    <div>
      <Banner/>
      <ProductList/>
    </div>
  )
}

// Footer
function Footer() {
  return <h2>我是Footer</h2>
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
