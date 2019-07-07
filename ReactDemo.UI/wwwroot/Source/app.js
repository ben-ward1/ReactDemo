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

//ReactDOM.render(
//    <Counter />,
//    document.getElementById('basicreactcomponent')
//);

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

$('.descriptionBtn').on('click', function () {
    $('#descTextContainer').css('display', 'none');
    $('#descTextContainer').fadeIn(750);
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

module.hot.accept();
