import React, { Component } from 'react';
import EditMetaSlid from '../components/EditMetaSlid'
import Content from '../../content/containers/Content'
class Slid extends Component {
    constructor(props) {
        super(props);
    }
    
    getContentMap(){
        let map=this.props.contentMap;
        for(var key in map)
        {
            if(key==this.props.slid.id) return map[key];
        }
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
        let contentMap=this.getContentMap();
      return (
              <div className="shortContent">
                  {short_content}
                  <Content
                    content={contentMap}
                    boolean={1}
                 />
              </div>            
      );
    };
}


export default Slid;
