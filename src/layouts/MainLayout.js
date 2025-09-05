import React from 'react'
import LeftSideBar from '../views/drawer/LeftSideBar'

const MainLayout = (props) => {
    return (
        <div className='LayoutWithSideBar'>
            <LeftSideBar />
            <div className='main-content'>
                {props.mainContent}
            </div>
        </div>
    )
}

export default MainLayout