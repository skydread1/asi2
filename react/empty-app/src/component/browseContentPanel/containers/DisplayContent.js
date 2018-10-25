import React, { Component } from 'react';
import Content from '../../common/content/containers/Content';

class DisplayContent extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
        this.getAllContent=this.getAllContent.bind(this);
    }
  
 getAllContent(){
     let array_render=[];
     
     for(var i=0;i<this.props.content.temp.length;i++){
         array_render.push(
             <Content
                content={this.props.content.temp[i]}
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
export default DisplayContent;
