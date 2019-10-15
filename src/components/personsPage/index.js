import React, {Component} from 'react'
import PersonsList from "./personsList";
import AddPerson from "./addPerson";

class PersonPage extends Component {
    state = {
        persons: []
    };
    id = 0;

    createPerson(name) {
        return{
            id: this.id++,
            name,
            data: []
        }
    }

    addNewPerson = (name) => {
        const newItem = this.createPerson(name);
        this.setState(({persons}) => {
            const newArray = [...persons, newItem];
            return {
                persons: newArray
            }
        })
    };

    onDeleted = (id) => {
        this.setState(({persons}) => {
            const index = persons.findIndex((el) => el.id === id);
            const newArray = [...persons.slice(0, index),
                ...persons.slice(index + 1)];
            return{
                persons: newArray
            };
        })
    };

    render() {
        return(
          <>
              <AddPerson addNewPerson={this.addNewPerson}/>
              <PersonsList persons={this.state.persons}
                           onDeleted={this.onDeleted}/>
          </>
        );
    }
}

export default PersonPage;