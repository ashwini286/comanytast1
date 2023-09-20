import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Header from '../../Components/Header'
import Home from '../../Components/Home'

const Dashboard = () => {
    return (
        <>
            <div className="dashboard grid-container">
                <Sidebar />
                <Header />
                <Home />
            </div>
        </>
    )
}

export default Dashboard
