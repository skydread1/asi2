import React, { Component } from 'react';
import { connect } from 'react-redux';
import OnlyContent from '../components/OnlyContent';
import {updateDraggedElt} from '../../../../actions';

class Content extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.updateSelectedContent = this.updateSelectedContent.bind(this);
        this.drag = this.drag.bind(this);
    }

    
    drag= (e,contentDragged) =>{

        if (e.dataTransfer) {
            e.dataTransfer.setData("content", contentDragged);
        }
        else if (e.originalEvent.dataTransfer){
            e.dataTransfer.setData("content", contentDragged);
        }
        this.updateSelectedContent(contentDragged);
    }

    //action: on drag of the content in the browseContentPannel (right part) we update the content in the slid in editSlidPanel
    updateSelectedContent(contentDragged) {
        const tmpContent = {
            id: contentDragged.id,
            title: contentDragged.title,
            type: contentDragged.type,
            src:contentDragged.src
        };
        this.props.dispatch(updateDraggedElt(tmpContent));
    }
    
  render() {

    return (
            <div id="draggableItem"
                 className="panel only-content"
                 draggable
                 onDragStart={(e)=>{this.drag(e,this.props.content)}}
            >
                    
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


export default connect() (Content);
