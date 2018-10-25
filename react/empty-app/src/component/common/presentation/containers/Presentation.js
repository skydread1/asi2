import React, { Component } from 'react';
import EditMetaPres from '../components/EditMetaPres';
import SlidList from '../components/SlidList';
class Presentation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       return (
            <div>
                <EditMetaPres/>
                <SlidList
                        slid_content={this.props.contentPres}
                        contentMap={this.props.contentMap}/>
            </div>
       );
    };
}


export default Presentation;
