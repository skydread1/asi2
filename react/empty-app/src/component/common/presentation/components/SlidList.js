import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slid from '../../slid/containers/Slid';

class SlidList extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
        this.getAllContent=this.getAllContent.bind(this);
    }
    
    getAllContent(){
        let array_render=[];
        for(var i=0;i<this.props.contentPres.slidArray.length;i++)
        {
            array_render.push(
                <Slid
                    key={i}
                    slid={this.props.contentPres.slidArray[i]}
                    displayMode={'SHORT'}
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

const mapStateToProps = (state, ownProps) => {
    return {
        contentPres: state.updateModelReducer.presentation
    }
};

//export the current classes in order to be used outside
export default connect(mapStateToProps) (SlidList);
