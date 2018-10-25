import React, { Component } from 'react';
import Slid from '../../slid/containers/Slid';

class SlidList extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
        this.getAllContent=this.getAllContent.bind(this);
    }
    
    getAllContent(){
        let array_render=[];
        let list=this.props.slid_content.slidArray;

        for(var i=0;i<this.props.slid_content.slidArray.length;i++)
        {
            array_render.push(
                <Slid
                    key={i}
                    slid={this.props.slid_content.slidArray[i]}
                    displayMode={'SHORT'}
                    contentMap={this.props.contentMap}
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
export default SlidList;
