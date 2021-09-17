import React, { Component } from "react";

class Event extends Component {

  state = {
    show: false,
  };

  handleButton = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    let event = this.props.event;

    return (
      <div className="Event">
        <ul>
          <li className="EventSummary">{event.summary}</li>
          <li className="EventLocation">{event.location}</li>
          <li className="EventDate">start: {event.start.dateTime} - Time Zone: {event.start.timeZone}</li>
          {this.state.show === true && (
            <p className="EventDetails">{event.description}</p>
          )}
          {this.state.show === false && (
            <button className="showMore" onClick={() => this.handleButton()}>
              Show details
            </button>
          )}
          {this.state.show === true && (
            <button className="showLess" onClick={() => this.handleButton()}>
              hide details
            </button>
          )}
        </ul>
      </div>
    );
  }
}
export default Event;