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
            <h5>Description</h5>
            <p>{this.state.description}</p>
            <button onClick={() => { this.refreshData(0) }}>Page description</button>
            <button onClick={() => { this.refreshData(1) }}>SW component</button>
            <button onClick={() => { this.refreshData(2) }}>Weather component</button>
            <button onClick={() => { this.refreshData(3) }}>Message to Daxko</button>
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