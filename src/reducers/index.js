export default (state = 0, action)=> {
    switch (action.type) {
        case 'INCREMENT' :
            console.log("incr = " + state);
            return state + 1;
        case 'DECREMENT':
            console.log("decr = " + state);
            return state - 1;
        default:
            console.log("default state = " + state);
            return state;
    }
}