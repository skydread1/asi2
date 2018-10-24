import React, { Component } from 'react';
import Content from '../../common/content/containers/Content';
import './browseContentPanel.css';

class BrowseContentpanel extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
        this.getAllContent=this.getAllContent.bind(this);
    }
  
 getAllContent(){
     let array_render=[];
     let map=this.props.content;
     for(var key in map)
     {
        array_render.push(
            <Content
               key={key}
               content={map[key]}
               boolean={1}
            />
            );
     }
     return array_render;
 }
    
  //render function use to update the virtual dom
  render() {
      const display_list= this.getAllContent();
    return (
            <div>
               {display_list}
           </div>
    );
  }
}

//export the current classes in order to be used outside
export default BrowseContentpanel;
