import {createStore} from 'redux';

const initState = {
    todo: [],
    post: []
};

function myReducer(state = initState, action) {
    if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todo: [...state.todo, action.todo]
        }
    }
    if (action.type === 'ADD_POST') {
        return {
            ...state,
            post: [...state.post, action.post]
        }
    }
}
const store = createStore(myReducer);

store.subscribe(() => {
        console.log('state updated');
        console.log(store.getState())
    }
);

store.dispatch({type: 'ADD_TODO', todo: 'learn redux'});
store.dispatch({type: 'ADD_POST', todo: 'sending redux task'});

export default myReducer;