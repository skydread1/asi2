import React, { Component } from 'react';
import { connect } from 'react-redux';


import Slid from '../../common/slid/containers/Slid'

class EditSlidPanel extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
      return (
              <div className="editSlidPanel"> 
                  <Slid 
                    slid = {this.props.selected_slid}
                    displayMode = {'FULL_MNG'}
                  />
              </div>            
      );
    };
}

const mapStateToProps = (state, ownProps) => {
    let mySelectedSlid = {};
    for (let slidTmp in state.updateModelReducer.presentation.slidArray) {
        if (state.updateModelReducer.presentation.slidArray[slidTmp].id === state.selectedReducer.slid.id) {
            mySelectedSlid = state.updateModelReducer.presentation.slidArray[slidTmp]; 
            if(state.selectedReducer.content.id !== undefined){
                mySelectedSlid.content_id = state.selectedReducer.content.id;
                console.log("test" + mySelectedSlid.content_id);
            }   
        }
    }

    return {
        selected_slid: mySelectedSlid
    }
};

export default connect(mapStateToProps)(EditSlidPanel);

