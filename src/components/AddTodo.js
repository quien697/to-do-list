import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const AddTodo = ({ inputRef, onClick }) => {
    console.log("AddTodo");
    return (
        <InputGroup>
            <FormControl
                className="rounded"
                placeholder="輸入代辦事項"
                ref={inputRef}
            />
            <InputGroup.Append>
                <Button 
                    className="ml-3 rounded"
                    onClick={onClick}
                >新增</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default AddTodo;