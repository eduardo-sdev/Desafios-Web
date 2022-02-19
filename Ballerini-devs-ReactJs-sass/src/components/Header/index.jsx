import React from 'react'
import { Link } from 'react-router-dom'
import './style.sass'


export const Header = (props) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="social-button">
                    <img src="assert/social-icones.svg" alt="db dev logo"/>
                </div>
                <div className="logo">
                    <Link to='/'>
                      <img src="assert/Logo.svg" alt="db dev logo"/>
                    </Link>
                </div>
                {props.searchBar ? (
                    <div className='search'>
                        <div className=' input'>
                            <input type='text' placeholder='Buscar'/>
                            <img src='/assert/feather_search.svg' />
                        </div>
                    </div>)
                :
                (<div></div>)}
            </div>
        </React.Fragment>
    )
}

