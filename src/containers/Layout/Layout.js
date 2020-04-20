import React, { Component, Fragment } from 'react'
import NavBar from '../../components/Navigation/NavBar/NavBar'
import Modal from '../../components/UI/Modal/Modal'
import Backpack from '../Backpack/Backpack'

class Layout extends Component {

    render(){
        return (
        <Fragment>
            <NavBar />
            <main>
                {this.props.children}
                <Modal>
                    <Backpack />
                </Modal>
            </main>
        </Fragment>
        )
    }
}

export default Layout