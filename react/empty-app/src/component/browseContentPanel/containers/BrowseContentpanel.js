import React, { Component } from 'react';
import { connect } from 'react-redux';
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
     let map=this.props.contentMap;
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
            <div class="vertical-scroll">
               {display_list}
           </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contentMap: state.updateModelReducer.content_map
    }
};


//export the current classes in order to be used outside
export default connect(mapStateToProps) (BrowseContentpanel);
