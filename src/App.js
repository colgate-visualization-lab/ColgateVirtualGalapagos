import React, {Component} from 'react'
import Layout from './containers/Layout/Layout'
import Homepage from './containers/Homepage/Homepage'

class App extends Component {
    render(){
        return (
            <div>
                <Layout>
                    <Homepage />
                </Layout>
            </div>
        )
    }
}

export default App
