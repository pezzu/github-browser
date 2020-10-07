import React from 'react'
import { Link } from 'react-router-dom'


const Header = (props) => {
    const navigate = (typeof props.navigate !== 'undefined')? props.navigate : []
    return (
        <ul className="flex items-center bg-blue-600 p-3">
            <li className = "mr-6">
                <Link id = "go-back" to = "/" className = "text-blue-200 hover:text-white">
                    <span className="font-bold text-xl tracking-tight ">Github</span>
                    <span className="text-xl tracking-tight "> Browser</span>
                </Link>                 
            </li>
            {navigate.map(nav => {
                return <li key = {nav.id} className = "mr-6">
                    <Link id = {nav.id} to = {nav.to} className = "text-blue-200 hover:text-white">{nav.text}</Link>
                </li>
            })}
            <li className = "mr-6">
                <div id="user-name" className = "font-semibold text-xl text-white">{props.title}</div>
            </li>
        </ul>
    )
}

export default Header