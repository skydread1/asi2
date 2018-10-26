import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateSlid } from '../../../actions';

import Slid from '../../common/slid/containers/Slid'

class EditSlidPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateCurrentSlid=this.updateCurrentSlid.bind(this);
    }
    
    //on change, uodate the slid in presentation
    updateCurrentSlid(id,title,txt,content_id){
        const tmpSlid = {
            id: id,
            title: title,
            txt: txt,
            content_id: content_id
        };
        this.props.dispatch(updateSlid(tmpSlid));
        
    }
    
    render() {
      return (
              <div className="editSlidPanel" onChange={()=>{this.updateCurrentSlid(this.props.selected_slid.id, this.props.selected_slid.title, this.props.selected_slid.txt, this.props.selected_slid.content_id)}}>
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
