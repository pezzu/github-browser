import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'


const Repository = (props) => {    
    return <div>
        <Link to={ `/${props.user}/${props.repository.name}` }>{ props.repository.name }</Link>
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
            List of Repositories for user {user}
            {repositories.map(repository => {
                return <Repository key = {repository.id} user = {user} repository = {repository}/>
            })}
        </div>
    )   
}

export default Repositories