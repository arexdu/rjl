import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
//import axios from 'axios';
import * as api from '../api';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

const onPopState = handler => {
    window.onpopstate = handler;
}

class App extends React.Component {
    state = {
        contests: []
    };

    componentDidMount() {
        //Timer, listeners
        //ajax
        this.fetchContestList();

        onPopState((event) => {
            this.setState({
                currentContestId: (event.state || {}).currentContestId
            });
        });
    }

    componentWillUnmount() {
//clean timers, listeners
        onPopState(null);
    }

    fetchContest = (contestId) => {
        pushState(
            { currentContestId: contestId },
            `/contest/${contestId}`
        );
        //look up contests
        api.fetchContest(contestId).then(contest => {
            this.setState({
                currentContestId: contest._id,
                contests: {
                    ...this.state.contests,
                    [contest._id]: contest
                }
            });
        });
    };

    fetchContestList = () => {
        pushState(
            { currentContestId: null },
            '/'
        );
        //look up contests
        api.fetchContestList().then(contests  => {
            this.setState({
                currentContestId: null,
                contests
            });
        });
    };

    currentContest() {
        return this.state.contests[this.state.currentContestId];
    }

    pageHeader() {
        if (this.state.currentContestId) {
            return this.currentContest().contestName;
        }

        return 'Naming Contents';
    }

    fetchNames = (nameIds) => {
        if (nameIds.length === 0) {
            return;
        }
        api.fetchNames(nameIds).then(names => {
            this.setState({
                names
            });
        });
    };

    lookupName = (nameId) => {
        if (!this.state.names || !this.state.names[nameId]){
            return {
                name: '...'
            };
        };

        return this.state.names[nameId];
    };

    addName = (newName, contestId) => {
        api.addName(newName, contestId).then(resp => {
            this.setState({
                contests: {
                    ...this.state.contests,
                    [resp.updatedContest._id]: resp.updatedContest
                },
                names: {
                    ...this.state.names,
                    [resp.newName._id]: resp.newName
                }

            });
        }).catch(console.error);
    };

    currentContent() {
        if (this.state.currentContestId) {
            return <Contest
                contestListClick={this.fetchContestList}
                fetchNames={this.fetchNames}
                lookupName={this.lookupName}
                addName={this.addName}
                {...this.currentContest()} />;
        }

        return <ContestList
                onContestClick={this.fetchContest}
                contests={this.state.contests} />;
    }

    render() {
        return (
            <div className="App">
                <Header message={this.pageHeader()}/>
                {this.currentContent()}
            </div>
        )
    }
};

export default App;
