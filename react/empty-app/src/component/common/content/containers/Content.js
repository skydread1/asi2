import React, { Component } from 'react';
import OnlyContent from '../components/OnlyContent';

class Content extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
    }
    
  render() {

    return (
            <div className="panel only-content">
                    <OnlyContent 
                        type={this.props.content.type} 
                        src={this.props.content.src} 
                        boolean={this.props.boolean}
                        title={this.props.content.title}
                    />
            </div>
    );
  }
}


export default Content;
