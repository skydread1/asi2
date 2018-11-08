import React from 'react';

import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import * as contentMapTmp from '../../lib/source/contentMap.json';
import * as contentPres from '../../lib/source/pres.json';

import BrowseContentpanel from '../browseContentPanel/containers/BrowseContentpanel';
import Presentation from '../common/presentation/containers/Presentation';
import EditSlidPanel from '../editSlidPanel/containers/EditSlidPanel';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from '../../reducers';
import { updateContentMap, updatePresentation } from '../../actions';
var Comm = require('../../services/React-Comm');
const store = createStore(globalReducer);

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.comm=new Comm();
        let temp_content_list;
        temp_content_list = contentMapTmp;
        let pres_content;
        pres_content = contentPres;
        this.state = {
            content_list: temp_content_list,
            content_pres: pres_content,
        };
        //send action to the store for update the current contentMap
        store.dispatch(updateContentMap(contentMapTmp));
        //store.dispatch(updatePresentation(contentPres));

        //send action to the store for update the current presentation
        store.dispatch(updatePresentation(contentPres));
        /*store.subscribe(() => {
            this.setState({ presentation: store.getState().updateModelReducer.presentation });
            this.setState({ contentMap: store.getState().updateModelReducer.content_map });
            if (store.getState().commandReducer.cmdPres == 'SAVE_CMD') {
                this.comm.savPres(store.getState().updateModelReducer.presentation, this.callbackErr);
            }
        });*/

        // Bind local function to the current object
        this.loadContentUpdate = this.loadContentUpdate.bind(this);
        this.loadPresUpdate = this.loadPresUpdate.bind(this);
        this.callbackErr = this.callbackErr.bind(this);

        //FIRST ACTIONS
        // try to load the contentMap from the server
        this.comm.loadContent(this.loadContentUpdate, this.callbackErr);
        // try to load the presentation from the server
        this.comm.loadPres(0, this.loadPresUpdate, this.callbackErr);
        // create the sokect connection between the server and the web browser
        this.comm.socketConnection(this.state.uuid);
    }
    loadContentUpdate(data) {
        //send action to the store for update the current contentMap 
        store.dispatch(updateContentMap(data));
    }
    loadPresUpdate(data) {
        //send action to the store for update the current presentation
        store.dispatch(updatePresentation(data));
    }
    callbackErr(msg) {
        console.error('Network Failure ?');
        console.error(msg);
    }

render() {
    return (
        <Provider store={store} >
            <div className='container-fluid height-100'>
                <div className="row height-100">
                    <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
                        <Presentation
                        />
                    </div>
                    <div className='col-md-6 col-lg-6 height-100'>
                        <EditSlidPanel
                        //selected_slid={this.state.content_pres.slidArray[0]}
                        />
                    </div>
                    <div className='col-md-3 col-lg-3 height-100'>
                        <BrowseContentpanel
                        />
                    </div>
                </div>
            </div>
        </Provider>
    );
}
}
