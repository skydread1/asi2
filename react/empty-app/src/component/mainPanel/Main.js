import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../lib/source/contentMap.json';
import BrowseContentpanel from '../browseContentPanel/containers/BrowseContentpanel';
import * as contentPres from '../../lib/source/pres.json';
import Slid from '../common/slid/containers/Slid'
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        let temp_content_list;
        temp_content_list=contentMapTmp;
        let pres_content;
        pres_content=contentPres;
        this.state = {
            content_list:temp_content_list,
            content_pres:pres_content,
        }; 
    }
    render() {
        return (
            <div className='container-fluid height-100'>
                <div className="row height-100">
                    <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>   
                    </div>
                    <div className='col-md-6 col-lg-6 height-100'>
                    <Slid slid={this.state.content_pres.slidArray[0]}
                    displayMode={'FULL_MNG'}
                    contentMap={this.state.content_list}/>                 
                    </div>
                    <div className='col-md-3 col-lg-3 height-100'>
                    <BrowseContentpanel content={this.state.content_list}/>              
                    </div>
                </div>
            </div>
        );
    }
}