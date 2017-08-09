import React from 'react';
import ReactDOM from 'react-dom';

const value = Math.random();
const color = value > 0.5 ? 'green' : 'red';

ReactDOM.render(
    <h2 style={{color}}> Hello RJL JSX -- {value}</h2>,
    document.getElementById('root')
);