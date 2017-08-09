import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    return (
        <h2>
            {props.param1}
        </h2>
    )
}

ReactDOM.render(
    <App param1="Hello React Component and props"/>,
    document.getElementById('root')
);