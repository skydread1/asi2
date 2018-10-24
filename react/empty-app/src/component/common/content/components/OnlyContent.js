import React, { Component } from 'react';
import AllProperties from './AllProperties';

class OnlyContent extends Component {
   //class constructor whith given properties
   constructor(props) {
    super(props);
}

  render() {
      let render_visual;
      switch(this.props.type){
        case "img":
            render_visual=(
                <img 
                    className='imgCard' 
                    src={this.props.src}  
                />
                );
        break;
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
        case "web":
        render_visual=(
        <iframe src={this.props.src} />
          );
          
  break;
              
        }
      
      
    return (
            <div className="onlyMedia">
                {render_visual}
                <AllProperties
                    id={this.props.id}
                    title={this.props.title}
                    boolean={this.props.boolean}
                />
            </div>            
    );
  }
}

export default OnlyContent;