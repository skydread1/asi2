import React, { Component } from 'react';
import EditMetaSlid from '../components/EditMetaSlid'

class Slid extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let short_content;
        switch(this.props.displayMode){
            case "FULL_MNG":
                 short_content=(
                    <EditMetaSlid 
                    />
                    );
            break;
            case "SHORT":
                short_content=(
                    <div className="shortContent">
                        id:{this.props.slid.id}, 
                        title:{this.props.slid.title},
                        txt:{this.props.slid.txt},
                        content_id:{this.props.slid.content_id},
                </div>    
                    );
            break;
                }
  
      return (
              <div className="shortContent">
                  {short_content}
              </div>            
      );
    };
}


export default Slid;
