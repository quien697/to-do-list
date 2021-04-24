import React from 'react';
/* PropTypes */
import propTypes, { array } from 'prop-types';
/* React-Bootstrap */
import { ListGroup } from 'react-bootstrap';

const TodoList = ({ todos, handleToggleTodo }) => {
    console.log("TodoList");
    return (
        <ListGroup className="w-100 mt-3">
            {todos.map((item, i)=>(
                <ListGroup.Item action key={i} active={item.completed} onClick={()=>handleToggleTodo(item.id)}>
                    {`${item.id + 1}. ${item.content}`}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

TodoList.propTypes = {
    todos: array,
    handleToggleTodo: propTypes.func
}

export default TodoList;