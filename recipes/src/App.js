import React from 'react';
import Menu from './Menu';
import logo from './logo.svg';
import './App.css';

const name = 'World!';
const element = <h1>Hello, {name}</h1>;

function test() {
  console.log("called");
  alert("hello world!");
}
function App() {
  return <div> <Menu/> </div>;
}

export default App;
