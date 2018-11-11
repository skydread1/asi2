const selectedReducer = (state = { slid: {}, content:{} }, action) => {
    console.log(action);
    switch (action.type) {
        case 'UPDATE_SELECTED_SLID':
            const newState1 = { slid: action.obj, content: state.content };
            return newState1;

        case 'UPDATE_SELECTED_CONTENT':
            const newSlid = JSON.parse(JSON.stringify(state.slid));
            newSlid.content_id = action.obj.id;
            console.log(newSlid.title);
            const newState2 = { slid: newSlid, content: action.obj };
            return newState2;

        default:
            return state;
    }
}
export default selectedReducer;