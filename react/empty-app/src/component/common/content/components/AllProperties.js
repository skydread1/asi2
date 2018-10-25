import React, { Component } from 'react';

class AllProperties extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
    if(this.props.boolean)
    return (
                <div>
                    <h1>ID: {this.props.id} Title:{this.props.title}</h1>        
                </div>
 
    );
    return(null);
  }
}

export default AllProperties;