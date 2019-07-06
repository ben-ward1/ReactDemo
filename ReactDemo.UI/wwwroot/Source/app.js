require('./lib');
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/site.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './reactcomponent.js';
import FetchData from './fetchdata';
import FetchProfile from './swApiCallDemo';

import ES6Lib from './es6codelib';

ReactDOM.render(
    <Counter />,
    document.getElementById('basicreactcomponent')
);

ReactDOM.render(
    <FetchData />,
    document.getElementById('reactcomponentwithapidata')
);

ReactDOM.render(
    <FetchProfile />,
    document.getElementById('swCharProfile')
)

module.hot.accept();
