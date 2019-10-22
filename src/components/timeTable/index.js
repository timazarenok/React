import React, {Component} from 'react'
import TasksPage from "../tasksPage";

class TimeTable extends Component {
  state = {
    persons: this.props.persons,
      value: 0
  };

  render() {
      const {value, persons} = this.state;
      return(
          <>

          </>
      );
  }
}

export default TimeTable;