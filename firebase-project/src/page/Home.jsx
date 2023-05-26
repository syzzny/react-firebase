import React from 'react'
import css from './style.css'

import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h3>Home</h3>
            <label className="label">email : </label>
            <input type="email" /> 
            <br />
            <label className="label">password : </label>
            <input type="password" />
            <br />
            <Link to={'/firestore'}>
                <button className='loginbtn'>
                    Login
                </button>
            </Link>
            
        </div>
    )
}
