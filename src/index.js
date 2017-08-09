import React from 'react';
import ReactDOM from 'react-dom';

const value = Math.random();
const color = value > 0.5 ? 'green' : 'red';

const App = () => {
    return (
        <h2 style={{color:color}}>
            Hello RJL -- {value}
        </h2>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);