import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Homepage from './containers/Homepage/Homepage'
import Layout from './containers/Layout/Layout'
import SplashScreen from './components/SplashScreen/SplashScreen'
import SignIn from './containers/SignIn/SignIn'


class App extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={SplashScreen}/>
                    <Route path="/authorization" component={SignIn}/>
                    <Layout>
                    <Route path="/home" exact component={Homepage}/>
                    </Layout>
                </Switch>
            </div>
        )
    }
}

export default App
