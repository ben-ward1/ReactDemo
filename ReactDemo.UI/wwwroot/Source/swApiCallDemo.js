import * as React from 'react';
import 'es6-promise';
import 'isomorphic-fetch';

export default class FetchProfile extends React.Component {
    constructor() {
        super();
        this.state = { profile: [], loading: true };
        fetch('/Demo/GetProfile')
            .then(data => {
                this.setState({ profile: data, loading: false });
            });
        this.refreshData();
    }

    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p>
            : FetchProfile.renderProfile(this.state.profile);

        return <div>
            <h3>Some random Star Wars character from a publicly available api</h3>
            <button onClick={() => { this.refreshData() }}>Get another profile</button>
            {contents}
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
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Skin Color</th>
                    <th>Eye color</th>
                    <th>Birth Year</th>
                </tr>
            </thead>
            <tbody>
                    <tr key={profile.name}>
                        <td>{profile.name}</td>
                        <td>{profile.height}</td>
                        <td>{profile.skin_color}</td>
                        <td>{profile.eye_color}</td>
                        <td>{profile.birth_year}</td>
                    </tr>
            </tbody>
        </table>
    }
}