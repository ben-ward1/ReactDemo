﻿//$ = require('jquery');

require('./lib');
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/site.css';

import ES6Lib from './es6codelib';

document.getElementById("fillthis").innerHTML = getText();

$('#fillthiswithjquery').html('Filled by Jquery!');

let myES6Object = new ES6Lib();
$('#fillthiswithes6lib').html(myES6Object.getData());