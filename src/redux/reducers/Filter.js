import { ALL } from '../../constants';
import { TOGGLE_FILTER } from '../actionTypes';

const Filter = (state = ALL, action) => {
    switch(action.type){
        case TOGGLE_FILTER:
            const { filter } = action.payload;
            return filter;
        default:
            return state;
    };
};

export default Filter;