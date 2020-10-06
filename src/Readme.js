import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'

const Readme = () => {
    const { user, repository } = useParams()
    const [ readme, setReadme ] = useState()

    const getReadme = (user, repository) => {
        return axios.get(`https://api.github.com/repos/${user}/${repository}/contents/`)
                    .then(({ data }) => data.find(file => file.name === 'README.md' && file.type === 'file'))
                    .then(readme => axios.get(readme.download_url))
                    .then(({ data }) => data)
    }

    useEffect(() => {
        getReadme(user, repository).then(readme => setReadme(readme))
    }, [user, repository])

    return (
        <div>
            Readme for repository {user}/{repository}
            <div>{readme}</div>
        </div>
    )   
}

export default Readme