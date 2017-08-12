import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import axios from 'axios';
import * as api from '../api';

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
        //look up contests
        api.fetchContest(contestId).then(contest => {
            this.setState({
                pageHeader: contest.contestName,
                currentContestId: contest.id,
                contests: {
                    ...this.state.contests,
                    [contest.id]: contest
                }
            });
        });
    };

    currentContest() {
        if (this.state.currentContestId) {
            return <Contest {...this.state.contests[this.state.currentContestId]} />;
        }

        return <ContestList
                onContestClick={this.fetchContest}
                contests={this.state.contests} />;
    }

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                {this.currentContest()}
            </div>
        )

    }
};

export default App;
