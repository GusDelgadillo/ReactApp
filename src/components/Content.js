import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Clock from './Clock';

export default class Content extends React.Component{
    render(){
        return(
       <>
      <div className="App">
      <header className="App-header">
      <h1>My first React website</h1> 
      <img src={logo} className="App-logo" alt="logo" />
      <Clock></Clock>
      </header>
    </div>
    </>
    );
    }
}