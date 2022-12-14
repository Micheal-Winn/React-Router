import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'
export const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>Greate Quotes</div>
        <nav className={classes.nav}>
            <ul>
                <li><NavLink className={navData => navData.isActive ? classes.active : ''} to='/quotes'>All Quotes</NavLink></li>
                <li><NavLink className={navData => navData.isActive ? classes.active : ''}  to='/new-quote'>Add a Quote</NavLink></li>
            </ul>
                
        </nav>
    </header>
  )
}
