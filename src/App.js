import React, { useRef } from 'react';
/* Components */
import Title from './components/Title';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
/* React Redux */
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, toggleFilter } from './redux/action';
/* React Bootstrap */
import { Container, Row } from 'react-bootstrap';
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
/* Constants */
import { ALL, ACTIVE, COMPLETE } from './constants';

const App = () => {
    console.log("App");
    // 透過 useDispatch 新增資料
    const dispatch = useDispatch();
    // 透過 useSelector 取得資料
    const todos = useSelector(state => state.todos);
    const filter = useSelector(state => state.filter);
    // 
    const inputRef = useRef('');
    // OnClick
    const handleAddTodo = () => {
        dispatch(addTodo(inputRef.current.value));
        inputRef.current.value = '';
    };
    const handleToggleTodo = (id) => dispatch(toggleTodo(id));
    const handleFilter = (filter) => dispatch(toggleFilter(filter));
    const filterData = (todos, filter) => {
        switch(filter){
            case ALL:
              return todos
            case ACTIVE:
              return todos.filter((item) => !item.completed)
            case COMPLETE:
              return todos.filter((item) => item.completed)
            default:
              return filter
          }
    }
    
    return (
        <Container>
            <Row className="mt-5">
                <Title value="To-Do List App" />
            </Row>
            <Row className="bg-white rounded shadow p-3 mb-5">
                <AddTodo inputRef={inputRef} handleAddTodo={handleAddTodo} />
            </Row>
            <Row className="bg-white rounded shadow p-3 mb-5">
                <Filter handleFilter={handleFilter} />
                <TodoList todos={filterData(todos, filter)} handleToggleTodo={handleToggleTodo} />
            </Row>
        </Container>
    )
};
export default App;