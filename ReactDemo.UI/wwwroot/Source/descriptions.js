import * as React from 'react';
import 'es6-promise';
import 'isomorphic-fetch';

export default class GetDescriptionText extends React.Component {
    constructor() {
        super();
        this.state = {
            description: " ", loading: true };
        fetch('/Demo/GetDescription?index=0')
            .then(response => response.text())
            .then(data => {
                this.setState({ description: data, loading: false });
            });
    }

    render() {
        //let contents = this.state.loading ? 'Loading...'
        //    : (this.state.description);

        return <div>
            
            <div id='descHeader'>
                <label>Descriptions: </label>
                <button className='descriptionBtn' onClick={() => { this.refreshData(0) }}>Page description</button>
                <button className='descriptionBtn' id='swDescBtn' onClick={() => { this.refreshData(1) }}>SW component</button>
                <button className='descriptionBtn' id='weatherDescBtn' onClick={() => { this.refreshData(2) }}>Weather component</button>
                <button className='descriptionBtn' onClick={() => { this.refreshData(3) }}>Message to Daxko</button>
            </div>
            <p id='descTextContainer'>{this.state.description}</p>
        </div>;
    }

    refreshData(index) {
        fetch('/Demo/GetDescription?index=' + index.toString())
            .then(response => response.text())
            .then(data => {
                this.setState({ description: data, loading: false });
            });
    }

    //static renderDescription(description) {
    //    return <p>{description}</p>
            
    //}
}