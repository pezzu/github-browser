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
        <div>
            <h3>Enter user id</h3>
            <input id="input-field"
                type = "text"
                value = {user}
                onChange = {onChangeUser}
            />
            <button id="search-button"
                onClick = {onSearch}
            >
                Search
            </button>
        </div>
    )
}

export default Home