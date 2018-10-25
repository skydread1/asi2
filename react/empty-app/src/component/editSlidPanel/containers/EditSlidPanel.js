import React, { Component } from 'react';
import Slid from '../../common/slid/containers/Slid'

class EditSlidPanel extends Component {
    constructor(props) {
        super(props);
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


export default EditSlidPanel;
