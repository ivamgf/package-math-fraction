import React from 'react';

let mdcNum1;
let mdcNum2;
let rest;
let mdc;

const Mdc = (c, d) => {
    mdcNum1 = c;
    mdcNum2 = d;

    while(mdcNum2 !== 0) {
        rest = mdcNum1 % mdcNum2;
        mdcNum1 = mdcNum2;
        mdcNum2 = rest;
    }
    mdc = mdcNum1;

    return mdc;
}


export default Mdc;