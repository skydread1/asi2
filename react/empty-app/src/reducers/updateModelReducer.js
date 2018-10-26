var Tools = require('../services/Tools.js');
const updateModelReducer = (state = { presentation: {}, content_map: {} }, action) => {
    console.log(action);
    switch (action.type) {
        case 'UPDATE_PRESENTATION':
            const newState2 = { presentation: action.obj, content_map: state.content_map };
            return newState2;
      
        case 'UPDATE_PRESENTATION_SLIDS':
            const newPresentation = JSON.parse(JSON.stringify(state.presentation));
            for(var i=0; i<newPresentation.slidArray.length;i++){
                if(newPresentation.slidArray[i].id == action.obj.id){
                    newPresentation.slidArray[i] = action.obj;
                }
            }

            const newState3 = { presentation: newPresentation, content_map: state.content_map };
            return newState3;
        
        case 'UPDATE_CONTENT_MAP':
            const newState1 = { presentation: state.presentation, content_map: action.obj };
            return newState1;
        case 'ADD_CONTENT':
            return;
        default:
            return state;
    }
}
export default updateModelReducer;
