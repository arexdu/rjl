import React from 'react';
import Header from './Header';

class App extends React.Component {
    state = {
        test : 23,
        pageHeader: 'Naming Contents'
    };

    componentDidMount() {
//Timer
    }

    componentWillUnmount() {
//Delete Timer
    }

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.state.test}
                </div>
            </div>
        )

    }
};

export default App;
