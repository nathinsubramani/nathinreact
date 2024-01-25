import React from 'react';
import "./Layout.css";
import {Outlet,Link} from "react-router-dom" //white screen will apppear if outlet is not given
export default function Layout() {
  return (
    <div>
        <nav>
            <ul className='nav-bar'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Outlet/>
      </div>
  )
} 