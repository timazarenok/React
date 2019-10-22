import React from 'react'
import PersonListItem from './personListItem'

const PersonsList = ({persons, onDeleted}) =>  {
        return(
            <ul className='list-inline'>
                {
                    persons.map((el) => {
                        return <li className="list-inline-item"
                                   key={el.id}>
                            <PersonListItem id={el.id}
                                            name={el.name}
                                            todolist={el.todolist}
                                            onDeleted={() => onDeleted(el.id)}/></li>
                    })
                }
            </ul>
        );
};

export default PersonsList;