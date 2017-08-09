import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    return (
        <h2>
            {props.hdMessage}
        </h2>
    )
};

App.propTypes = {
    hdMessage: React.PropTypes.string
};

App.defaultProps = {
    hdMessage: 'Hello RJL!'
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);