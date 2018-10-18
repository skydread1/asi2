import React, { Component } from 'react';

class onlyContent extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
      let render_visual;
      switch(this.props.type){
        case "img_url":
            render_visual=(
                <img 
                    className='imgCard' 
                    src={this.props.src}  
                />
                );
        break;
        case "video":
              render_visual=(
              <object  width="100%" height="100%"
                        data={this.props.src}>
                </object>
                );
        break;
              
        }
      
      
    return (
            <div className="onlyMedia">
                {render_visual}
            </div>            
    );
  }
}