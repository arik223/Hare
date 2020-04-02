import React from "react"
import { Link } from "react-router-dom"
import './Navigation.css'

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className='items-wrapper'>
            <NavigationItem url={'/'} label={'HOME'} />
            <NavigationItem url={'/Tour'} label={'TOUR'} />
            <NavigationItem url={'/Merch'} label={'MERCH'} />
            <NavigationItem url={'/Music'} label={'MUSIC'} />
            <NavigationItem url={'/About'} label={'ABOUT'} />
        </div>
        {/* <Link to={'/'} >HOME</Link>
        <Link to="/Tour">TOUR</Link>
        <Link to="/Merch">MERCH</Link>
        <Link to="/Music">MUSIC</Link>
        <Link to="/About">ABOUT</Link> */}
    </div>
  )
}

const NavigationItem = ({url, label}) => {
    return (
        <div className='nav-item'>
            <div className='label'>
                <Link to={url}> 
                    {label}
                </Link>
            </div>
        </div>
    )
}

export default Navigation