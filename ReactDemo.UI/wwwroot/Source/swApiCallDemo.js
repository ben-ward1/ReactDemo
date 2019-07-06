import * as React from 'react';
import 'es6-promise';
import 'isomorphic-fetch';

export default class FetchProfile extends React.Component {
    constructor() {
        super();
        this.state = { profile: {}, loading: true };
        fetch('/Demo/GetProfile')
            .then(response => response.json())
            .then(data => {
                this.setState({ profile: data, loading: false });
            });
    }

    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p>
            : FetchProfile.renderProfile(this.state.profile);

        return <div>
            <h5>Some random Star Wars character from a publicly available api</h5>
            {contents}
            <button onClick={() => { this.refreshData() }}>Get another profile</button>
        </div>;
    }

    refreshData() {
        fetch('/Demo/GetProfile')
            .then(response => response.json())
            .then(data => {
                this.setState({ profile: data, loading: false });
            });
    }

    static renderProfile(profile) {
        return <table className='table'>
            <tbody>
                <tr>
                    <td className="tblKey">Name</td><td className="tblVal">{profile.name}</td>
                </tr>
                <tr>
                    <td className="tblKey">Height</td><td className="tblVal">{profile.height} cm</td>
                </tr>
                <tr>
                    <td className="tblKey">Skin Color</td><td className="tblVal">{profile.skin_color}</td>
                </tr>
                <tr>
                    <td className="tblKey">Eye Color</td><td className="tblVal">{profile.eye_color}</td>
                </tr>
                <tr>
                    <td className="tblKey">Birth Year</td><td className="tblVal">{profile.birth_year}</td>
                </tr>
            </tbody>
        </table>
    }
}