import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

import Header from './Header'

const Repository = (props) => {    
    return <div className = "px-4 p-2 hover:bg-blue-100">
        <Link 
            className = "font-semibold text-xl hover:underline"
            to={ `/${props.user}/${props.repository.name}` }
        >
            { props.repository.name }
        </Link>
        <div className = "text-sm">{props.repository.description}</div>
    </div>
}

const Repositories = () => {
    const { user } = useParams()
    const [ repositories, setRepositories ] = useState([])
    
    const getRepositories = (user) => {
        return axios.get(`https://api.github.com/users/${user}/repos`).then(({ data }) => data)                    
    }
    
    useEffect(() => {
        getRepositories(user).then(repositories => setRepositories(repositories))
    }, [user])
    
    return (
        <div>
            <Header title={`Repositories: ${user}`}/> 
            <div className = "flex justify-center">
                <div className = "py-4 divide-y divide-gray-400">
                    {repositories.map(repository => {
                        return <Repository key = {repository.id} user = {user} repository = {repository}/>
                    })}
                </div>
            </div>
        </div>
    )   
}

export default Repositories