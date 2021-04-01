import logo from './logo.svg';
import './App.css';
import React from 'react';
import InteractiveMap from './components/InteractiveMap'

class App extends React.Component{

    render(){
        return (
            <div>
                <InteractiveMap />
            </div>
        );
    }
}

export default App;
