import React from 'react';

export default class Clock extends React.Component{
  constructor  (props){
      super(props);
      this.state={date: new Date()};
  }
  componentDidMount(){
      this.timerID=setInterval(
          () =>this.tick(),    
       1000);
  }

  componentWillUnmount(){
      clearInterval(this.timerID);
  }

  tick(){ 
      this.setState({date: new Date()});
  }
  render(){
      return(
          <h1> {this.state.date.toLocaleTimeString()} </h1>
      );
  }



}