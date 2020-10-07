import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'

import Header from './Header'

const Readme = () => {
    const { user, repository } = useParams()
    const [ readme, setReadme ] = useState()

    const getReadme = (user, repository) => {
        return axios.get(`https://api.github.com/repos/${user}/${repository}/readme/`)
                    .then(({ data }) => atob(data.content))
    }

    useEffect(() => {
        getReadme(user, repository).then(readme => setReadme(readme))
    }, [user, repository])

    return (
        <div>
            <Header title = {`Repository ${user}/${repository}`} 
                    navigate = {[{   
                            id: "go-repository-list",
                            to: `/${user}`, 
                            text: "Repositories" 
                        } 
                    ]}
            />
            <div id = "description">{readme}</div>
        </div>
    )   
}

export default Readme