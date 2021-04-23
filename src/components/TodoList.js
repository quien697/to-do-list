import React from 'react';
import { ListGroup } from 'react-bootstrap';

const TodoList = ({ todos, onClick }) => {
    console.log("TodoList");
    return (
        <ListGroup className="w-100 mt-3">
            {todos.map((item, i)=>(
                <ListGroup.Item action key={i} active={item.completed} onClick={()=>onClick(item.id)}>
                    {`${item.id + 1}. ${item.content}`}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default TodoList;