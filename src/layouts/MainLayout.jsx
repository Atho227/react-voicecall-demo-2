import React from 'react'
import LeftSideBar from '../components/LeftSideBar/LeftSideBar'
import './MainLayout.css'

const MainLayout = (props) => {
    return (
        <div className='LayoutWithSideBar'>
            <LeftSideBar />
            <div className='MainContent'>
                {props.mainContent}
            </div>
        </div>
    )
}

export default MainLayout