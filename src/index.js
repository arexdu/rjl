import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';

const App = (props) => {
    return (
        <div className="App">
            <Header message="Naming Module!"/>
            <div>
                ...
            </div>
        </div>

    )
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
);