import React from 'react';
/* PropTypes */
import propTypes from 'prop-types';
/* React-Bootstrap */
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const AddTodo = ({ inputRef, handleAddTodo }) => {
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
                    onClick={handleAddTodo}
                >新增</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

AddTodo.propTypes = {
	inputRef: propTypes.object,
    handleAddTodo: propTypes.func,
}

export default AddTodo;