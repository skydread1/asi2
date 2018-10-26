import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slid from '../../common/slid/containers/Slid'

class EditSlidPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    
    render() {
      return (
              <div className="editSlidPanel">
                  <Slid
                    contentMap = {this.props.contentMap}
                    slid = {this.props.selected_slid}
                    displayMode = {'FULL_MNG'}
                  />
              </div>            
      );
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        selected_slid: state.selectedReducer.slid
    }
};


export default connect(mapStateToProps)(EditSlidPanel);
