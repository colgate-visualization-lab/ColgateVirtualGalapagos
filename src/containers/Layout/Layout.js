import React, {Fragment} from 'react'

const layout = (props) => {
    return (
    <Fragment>
        <div>Toolbar, SideBar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Fragment>
)}

export default layout