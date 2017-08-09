import React from 'react';
import Header from './Header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { test : 123 };
    }
    render() {
        return (
            <div className="App">
                <Header message="Naming Contents!"/>
                <div>
                    {this.state.test}
                </div>
            </div>
        )

    }
};

export default App;
