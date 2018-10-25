import React, { Component } from 'react';
import EditMetaSlid from '../components/EditMetaSlid'
import Content from '../../content/containers/Content'
class Slid extends Component {
    constructor(props) {
        super(props);
<<<<<<< HEAD
        this.getContentMap=this.getContentMap.bind(this);
=======
>>>>>>> a84af2eb91c5b76996564202ca070588c562a8df
    }
    
    getContentMap(){
        let map=this.props.contentMap;
<<<<<<< HEAD
        let array=[];
        for(var key in map)
        {
            if(key===this.props.slid.content_id)
            {
                array.push(  
                <Content
                    content={map[key]}
                    boolean={1}
                 />)
            } 
        }
        return array;
=======
        for(var key in map)
        {
            if(key==this.props.slid.id) return map[key];
        }
>>>>>>> a84af2eb91c5b76996564202ca070588c562a8df
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
<<<<<<< HEAD
      const display_content= this.getContentMap();
      return (
              <div className="shortContent">
                  {short_content}
                  {display_content}
=======
        let contentMap=this.getContentMap();
      return (
              <div className="shortContent">
                  {short_content}
                  <Content
                    content={contentMap}
                    boolean={1}
                 />
>>>>>>> a84af2eb91c5b76996564202ca070588c562a8df
              </div>            
      );
    };
}


export default Slid;
