import React, { Component } from 'react';
import Button from './Button'

function test () {
  console.log("add functionality to navigate :)");
}
class Menu extends Component {
  render() {
  return <div>
    <Button label="about" handleClick={test} />
    <Button label="recipes" handleClick={test} />
    {/* TODO: This page should be only available to admins */}
    <Button label="upload" handleClick={test} />
  </div>
  }
}

export default Menu; 