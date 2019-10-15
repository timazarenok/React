import React from 'react'
import PersonListItem from './personListItem'

const PersonsList = ({persons, onDeleted}) =>  {
        return(
            <ul className='list-group'>
                {
                    persons.map((el) => {
                        return <li className="list-inline-item"
                                   key={el.id}>
                            <PersonListItem {...el}
                                   onDeleted={() => onDeleted(el.id)}/></li>
                    })
                }
            </ul>
        );
};

export default PersonsList;