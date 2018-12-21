import React, { Component } from 'react';

class Event extends Component {

    constructor() {
        super();
        this.eventName = "Pretty Nasty";
        this.going = 300;
        this.price = 
        this.startTime = '10:00 pm'
        this.endTime = '3:00 am';
        this.date = 'December 12';
    }
    
  render() {
    return (
      <div className="Event">
       <img src="howardParty.jpg" alt="Rep yo city"></img>
       <p>
        <h2>
        {this.name}
        <br></br>
        {this.date}
        <br></br>
        {this.startTime} - {this.endTime}
        <br></br>
        Going: {this.going}
        </h2>
       </p>
      </div>
    );
  }
}


export default Event;