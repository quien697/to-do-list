
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const initState = [];

const Todos = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            return [
                ...state,
                {
                    id: id,
                    content: content,
                    completed: false
                }
            ];
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return state.map((item) => {
                if(item.id !== id) return { ...item };
                return {
                    ...item,
                    completed: !item.completed
                }
            });
        }
        default:
            return state;
    }
};

export default Todos;