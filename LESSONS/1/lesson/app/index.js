let http = require('http');

// let { hello, bye } = require('./components/component');

// hello();
// bye();

let colorizer = require('./components/colorText');

let t1 = {
    text: 'some Text',
    colorText: 'red'
}

let t2 = {
    text: 'some Text 2',
    colorBg: 'red'
}

let t3 = {
    text: 'some Text 3',
    colorText: 'red',
    colorBg: 'blue'
}

colorizer(t1)
colorizer(t2)
colorizer(t3)