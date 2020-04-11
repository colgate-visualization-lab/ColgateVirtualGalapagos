import React, {Fragment} from 'react'
import NavBar from '../../components/Navigation/NavBar/NavBar'

const layout = (props) => {
    return (
    <Fragment>
        <NavBar />
        <main>
            {props.children}
        </main>
    </Fragment>
)}

export default layout