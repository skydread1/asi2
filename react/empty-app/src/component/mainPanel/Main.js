import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../lib/source/contentMap.json';
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentMap: contentMapTmp,
        }
    }
    render() {
        return (
            <div className='container-fluid height-100'>
                <div className="row height-100">
                    <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
                    <h1>je suis div 1</h1>
                    </div>
                    <div className='col-md-6 col-lg-6 height-100'>
                    <h1>je suis div 2</h1>
                    </div>
                    <div className='col-md-3 col-lg-3 height-100'>
                    <h1>je suis div 3</h1>
                    </div>
                </div>
            </div>
        );
    }
}