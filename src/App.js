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
                        <Route path="/home" 
                         render={(props) => <Homepage {...props} lockValue={1} />}/>
                         <Route path="/home2" 
                         render={(props) => <Homepage {...props} lockValue={2} />}/>
                           <Route path="/home3" 
                         render={(props) => <Homepage {...props} lockValue={3} />}/>
                         <Route path="/home4" 
                         render={(props) => <Homepage {...props} lockValue={4} />}/>
                           <Route path="/home5" 
                         render={(props) => <Homepage {...props} lockValue={5} />}/>
                    </Layout>
                </Switch>
            </div>
        )
    }
}

export default App
