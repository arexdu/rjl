import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import axios from 'axios';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

class App extends React.Component {
    state = {
        pageHeader: 'Naming Contents',
        contests: []
};

    componentDidMount() {
        //Timer, listeners
        //ajax
        axios.get('/api/contests')
            .then(resp => {
                //console.log(resp.data.contests);
                this.setState({
                    contests: resp.data.contests
                });
            })
            .catch(console.error)

    }

    componentWillUnmount() {
//clean timers, listeners
    }

    fetchContest = (contestId) => {
        pushState(
            { currentContestId: contestId },
            `/contest/${contestId}`
        );
    };

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <ContestList
                    onContestClick={this.fetchContest}
                    contests={this.state.contests} />
            </div>
        )

    }
};

export default App;
