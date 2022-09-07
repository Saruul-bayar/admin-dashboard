import React from 'react'
import { Dashboard, Person, AddBusiness, CreditCard, LocalShipping, InsertChart, Notifications, Settings } from '@mui/icons-material'
import './sidebar.scss'

const Sidebar = () => {
    return (
        <section className='sidebar'>
            <div className="top">
                <span className='logo'>SyNK</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <Dashboard className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <Person className='icon' />
                        <span>Users</span>
                    </li>
                    <li>
                        <AddBusiness className='icon' />
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCard className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShipping className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFULL</p>
                    <li>
                        <InsertChart className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <Notifications className='icon' />
                        <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <Settings className='icon' />
                        <span>Settings</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </section>
    )
}

export default Sidebar