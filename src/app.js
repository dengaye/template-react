import React from 'react';
import Flex from './components/Flex';

import './styles/index.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1> webpack react </h1>
                <div className="header">
                    <div className="svg">svg</div>
                    <Flex />
                </div>
            </div>
        )
    }
}

export default App;