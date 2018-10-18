import React, { Component } from 'react';
import onlyContent from './containers/onlyContent';
import allProperties from './containers/allProperties';
import { connect } from 'react-redux';

class Content extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
    }
    
  render() {

    return (
            <div className="panel only-content">
                <div className="panel-body">
                    <Visual 
                        type={this.contentMap.type} 
                        src={this.props.robot.visual_src} 
                    />
                </div>
            </div>
    );
  }
}


export default connect()(Robot);

//export default Robot;