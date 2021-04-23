/* 
    整個應用程式的 state，被儲存在一個樹狀物件放在唯一的 store 裡面。
*/

import { createStore } from 'redux';
import TodoApp from './reducers';

const store = createStore(TodoApp);
export default store;