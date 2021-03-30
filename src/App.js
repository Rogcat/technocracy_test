import React from 'react'
import Header from './components/header/Header'
import Modal from './components/Modal/Modal'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './components/Users/Users'




class App extends React.Component {

    render() {
        return (
            <Router>
                <div className='App'>
                    <Header />
                    <Switch>
                        <Route path='/all' exact component={Users} />
                    </Switch>
                    <Modal />
                </div>
            </Router>
        )
    }
}

export default App;