import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
    state = {
        pageHeader: 'Naming Contents'
    };

    componentDidMount() {
//Timer, listeners
    }

    componentWillUnmount() {
//clean timers, listeners
    }

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    <ContestPreview {...this.props.contests[0]}/>
                </div>
            </div>
        )

    }
};

export default App;
