import React, {Component} from 'react'
import PersonsList from "./personsList";
import AddPerson from "./addPerson";
import {connect} from "react-redux";
import {addPerson, deletePerson, getPersons} from "../../actions";

class PersonPage extends Component {
    state = {
        persons: []
    };
    id = 2;

    componentDidMount() {
        this.props.getPersons();
    }

    createPerson(name) {
        return{
            id: this.id++,
            name,
            todolist: []
        }
    }

    addNewPerson = (name) => {
        const newItem = this.createPerson(name);
        this.props.addPerson(newItem);
    };

    onDeleted = (id) => {
        this.props.deletePerson(id);
    };

    render() {
        return(
          <>
              <AddPerson addNewPerson={this.addNewPerson}/>
              <PersonsList persons={this.props.state}
                           onDeleted={this.onDeleted}/>
          </>
        );
    }
}

export default connect(state => ({state: state.persons}),
    dispatch => ({
        getPersons: () => dispatch(getPersons()),
        addPerson: (item) => dispatch(addPerson(item)),
        deletePerson: (id) => dispatch(deletePerson(id)),
    })
    )(PersonPage);