import {createStore} from 'redux';

function counter(state = 0, action) {
    switch(action.type) {
        case 'INCREMENT':
            console.log('incrementing')
            return state + 1
        case 'DECREMENT':
            console.log('decrementing')
            return state - 1
        default:
            return state
    }
}

let store = createStore(counter);

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})