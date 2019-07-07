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

        return <div id='descComponentContainer'>
            
            <div id='descHeader'>
                <label>Descriptions: </label>
                <button className='descriptionBtn' onClick={() => { this.refreshData(0) }}>Page description</button>
                <button className='descriptionBtn' id='swDescBtn' onClick={() => { this.refreshData(1) }}>SW component</button>
                <button className='descriptionBtn' id='weatherDescBtn' onClick={() => { this.refreshData(2) }}>Weather component</button>
                <button className='descriptionBtn' onClick={() => { this.refreshData(3) }}>Message to Daxko</button>
            </div>
            <p id='descTextContainer'>{this.state.description}</p>
            <div id='linksContainer'>
                <label>Links: </label>
                <a href='https://github.com/BenjaminEllisWard/ReactDemo'>My source code</a>
                <text>      |      </text>
                <a href='https://swapi.co/'>Star Wars API</a>
                <text>      |      </text>
                <a href='https://codeburst.io/how-to-use-webpack-in-asp-net-core-projects-a-basic-react-template-sample-25a3681a5fc2'>Demo I used to set up webpack, react, etc.</a>
            </div>
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