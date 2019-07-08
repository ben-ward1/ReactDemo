require('./lib');
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/site.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './reactcomponent.js';
import FetchData from './fetchdata';
import FetchProfile from './swApiCallDemo';

import ES6Lib from './es6codelib';
import GetDescriptionText from './descriptions';

ReactDOM.render(
    <FetchData />,
    document.getElementById('reactcomponentwithapidata')
);

ReactDOM.render(
    <FetchProfile />,
    document.getElementById('swCharProfile')
);

ReactDOM.render(
    <GetDescriptionText />,
    document.getElementById('descriptionTextDiv')
);

/// Description button click support section

$('.descriptionBtn').on('click', function () {
    $('.compDiv').css('box-shadow', 'none');
    $('.descriptionBtn').css('box-shadow', 'none');
    $(this).css('box-shadow', '0px 0px 6px 2px lightblue');
});

$('#swDescBtn').on('click', function () {
    $('#swCharProfile').css('box-shadow', '0px 0px 6px 2px lightblue');
});

$('#weatherDescBtn').on('click', function () {
    $('#reactcomponentwithapidata').css('box-shadow', '0px 0px 6px 2px lightblue');
});

/// End button click support section

// Changes 'Loading...' header
$(document).ready(function () {
    $('#mainHeader').html('Ben&#39;s Great React Demo');
});

module.hot.accept();
