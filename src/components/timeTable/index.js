import React, {Component} from 'react'
import TasksPage from "../tasksPage";

class TimeTable extends Component {
  state = {
    persons: this.props.persons,
      value: 0
  };

  increment = () => {
      const {persons} = this.state;
      this.setState((prevState) => {
          return prevState.value === persons.length ? {value: 0} : {value: prevState.value+1};
      })
  };

  render() {
      const {value, persons} = this.state;
      return(
          <>
          <TasksPage data={persons[value].data}/>
              <button onClick={this.increment}>+</button>
          </>
      );
  }
}

export default TimeTable;