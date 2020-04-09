import React from "react"
import { Link } from "react-router-dom"
import superhero from './superhero2.svg'
import './Superhero.css'

const Superhero = () => {
  return (
    <div className='superhero'>
        <div className='superhero-container'>
            {/* <div className='superhero-label'>
                HARE
            </div> */}
            <img src={superhero} alt="React Logo" />
        </div>
        {/* <Link to={'/'} >HOME</Link>
        <Link to="/Tour">TOUR</Link>
        <Link to="/Merch">MERCH</Link>
        <Link to="/Music">MUSIC</Link>
        <Link to="/About">ABOUT</Link> */}
    </div>
  )
}

const Image = ({url, label}) => {
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

export default Superhero