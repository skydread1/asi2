import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setSelectedSlid } from '../../../../actions';
import {updateSlid } from '../../../../actions';

import EditMetaSlid from '../components/EditMetaSlid';
import Content from '../../content/containers/Content';
class Slid extends Component {
    constructor(props) {
        super(props);
        this.getContentMap = this.getContentMap.bind(this);
        this.updateSelectedSlid=this.updateSelectedSlid.bind(this);
        this.updateCurrentSlid=this.updateCurrentSlid.bind(this);
        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleChangeText=this.handleChangeText.bind(this);
    }

    ///handle title
    handleChangeTitle = (e) =>{
        this.updateCurrentSlid();
    }

    //handle text
    handleChangeText = (e) =>{
        this.updateCurrentSlid();
    }

    //action: on change, uodate the slid in presentation
    updateCurrentSlid(){
        const tmpSlid2 = {
            id: this.props.slid.id,
            title: this.props.slid.title,
            txt: this.props.slid.txt,
            content_id: this.props.slid.content_id
        };
        this.props.dispatch(updateSlid(tmpSlid2)); 
    }

    //action: on click on a slid in presentation, we update the slid in editSlidPanel
    updateSelectedSlid() {
        const tmpSlid = {
            id: this.props.slid.id,
            title: this.props.slid.title,
            txt: this.props.slid.txt,
            content_id: this.props.slid.content_id
        };
        this.props.dispatch(setSelectedSlid(tmpSlid));
    }

    //get the content from a specific slide
    getContentMap() {
        let map = this.props.contentMap;
        let array = [];
        for (var key in map) {
            if (key === this.props.slid.content_id) {
                array.push(
                    <Content
                        key={key}
                        content={map[key]}
                        boolean={1}
                    />)
            }
        }
        return array;
    }

    render() {
        let short_content;
        switch (this.props.displayMode) {
            case "FULL_MNG":
                short_content = (
                    <EditMetaSlid
                    title = {this.props.slid.title}
                    txt = {this.props.slid.txt}
                    handleChangeTitle = {this.handleChangeTitle}
                    handleChangeText = {this.handleChangeText}
                    />
                );
                break;
            case "SHORT":
                short_content = (
                    <div className="shortContent">
                        id:{this.props.slid.id},
                        title:{this.props.slid.title},
                        txt:{this.props.slid.txt},
                        content_id:{this.props.slid.content_id},
                </div>
                );
                break;
            default:
                short_content = (
                    <div>Error displayMode format</div>
                );
        }
        const display_content = this.getContentMap();
        return (
            <div className="shortContent" 
            onClick={()=>{this.updateSelectedSlid()}}>
                {short_content}
                {display_content}
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {

    return {
        contentMap: state.updateModelReducer.content_map
    }
};

export default connect(mapStateToProps)(Slid);
