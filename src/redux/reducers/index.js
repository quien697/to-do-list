/* 

    Redux 架構圍繞著嚴格的單向資料流。

    有一點很重要需要注意，你的 Redux 應用程式中將只會有一個 store。
    當你想要把你的資料處理邏輯拆分時，你會使用 reducer 合成 而不是使用許多的 store。


    Action 描述實際發生一些事，不過並不指定應用程式的 state 要如何去應對改變。這是 reducer 的工作。
*/
import { combineReducers } from 'redux';
import todos from './Todos';
import filter from './Filter';

const TodoApp = combineReducers({
    todos,
    filter
});

export default TodoApp;