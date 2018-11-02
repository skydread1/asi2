import React from 'react';
import { connect } from 'react-redux';

import './editMetaSlid.css'
class EditMetaSlid extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange() {
        this.setState({ checked: !this.state.checked });
        console.log('onChange');
    }

    render() {
    return(
            <div className="form-group">
                <label htmlFor="currentSlideTitle">Title</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="currentSlideTitle"
                    onChange={this.props.handleChangeTitle}
                    //value={this.props.title}
                    />
                <label htmlFor="currentSlideText">Text</label>
                <textarea 
                    row="5"
                    type="text"
                    className="form-control"
                    id="currentSlideText"
                    onChange={this.props.handleChangeTxt}
                    //value={this.props.txt}
                    >
                </textarea>
            </div>
    );
}
}


export default connect()(EditMetaSlid);
      