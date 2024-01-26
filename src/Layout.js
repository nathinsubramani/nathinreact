import React from 'react';
import "./Css/Layout.css";
import {Outlet,Link} from "react-router-dom" //white screen will apppear if outlet is not given
export default function Layout() {
  return (
    <div>
        <nav>
            <ul className='nav-bar'>
            <Link className="nav-link" to="/">Home</Link>
              <li><Link className="nav-link" to="/about">About</Link></li>
              <li><Link className="nav-link" to="/contact">Contact</Link></li>
              <li><Link className="nav-link" to="/counter">Counter</Link></li>
              <li><Link className="nav-link" to="/effect">Effect</Link></li>
              <li><Link className="nav-link" to="/reducer">Reducer</Link></li>
            </ul>
        </nav>
        <Outlet/>
      </div>
  )
} 