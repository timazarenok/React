import React from 'react'
import ToDoListItem from "./to-do-list-item";
import carousel from 'carousel'


const ToDoList = ({todolist, isDoneHandler, isImportantHandler, onDelete}) => {
    return(
            <ul className="list">
            {
                todolist.map((el) => {
                    return <li key={el.id} className="list-inline-item">
                        <ToDoListItem {...el}
                                      onDelete={() => onDelete(el.id)}
                                      isDoneHandler={() => isDoneHandler(el.id)}
                                      isImportantHandler={() => isImportantHandler(el.id)}/>
                    </li>
                })
            }
        </ul>
    );
};

export default ToDoList;