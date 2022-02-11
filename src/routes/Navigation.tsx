import React, { Fragment } from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'

import logo from "../logo.svg"

export const Navigation = () => {
  return (
    <BrowserRouter>

        <div className='main-layout'>
            <nav>
                <img src={logo} alt='react-logo' />

                <ul>
                    <li>
                        <NavLink to="/home" className={({isActive})=> isActive ? "nav-active" : ""}>
                            Home
                        </NavLink>
                        
                       
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive})=> isActive ? "nav-active" : ""}  >
                                about
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/users" className={({isActive})=> isActive ? "nav-active" : ""}>
                            users
                        </NavLink>
                    </li>
                </ul>
            </nav>
           
        <Routes>
            <Route path='/home' element={<h1>Home page</h1>} />
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/users' element={<h1>Users</h1>} />


            <Route path='/*' element={<Navigate to="/home" replace />} />
        </Routes>
        </div>
        

       
 
    </BrowserRouter>
  )
}
