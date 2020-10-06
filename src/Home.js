import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Home = (props) => {
    const [user, setUser] = useState('')
    const history = useHistory()

    const onChangeUser = (e) => {
        setUser(e.target.value)
    }

    const onSearch = () => {
        props.onChange(user)
        history.push(user)
    }

    return (
        <div className = "flex justify-center items-center h-screen px-8 py-8">
            <div className = "px-4">
                <input id = "input-field"
                    className = "shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" 
                    placeholder = "Enter github user ID"                        
                    type = "text"
                    value = {user}
                    onChange = {onChangeUser}
                />
            </div>
            <div className = "px-4">
                <button id = "search-button"
                    className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type = "button"
                    onClick = {onSearch}
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default Home