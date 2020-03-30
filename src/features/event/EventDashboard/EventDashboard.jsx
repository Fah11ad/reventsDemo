import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from 'react-redux'
import EventList from "../EventList/EventList";
import { createEvent, updateEvent, deleteEvent } from '../eventActions'

//section 7 redux 5th => conncet eventDashboard to the store to create/update/delete insted of state

const mapState = (state) =>({
  events: state.events
})


//section 7 redux 6th => conncet events actions to eventDashboard

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
}

class EventDashboard extends Component {



  handleDeleteEvent = id => {
    this.props.deleteEvent(id)
  };

  render() {
    const {events} = this.props
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
         <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
