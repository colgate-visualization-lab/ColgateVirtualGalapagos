import React, {Fragment} from 'react'
import NavBar from '../../components/Navigation/NavBar/NavBar'
import Modal from '../../components/UI/Modal/Modal'

const layout = (props) => {
    return (
    <Fragment>
        <NavBar />
        <main>
            {props.children}
            <Modal />
        </main>
    </Fragment>
)}

export default layout