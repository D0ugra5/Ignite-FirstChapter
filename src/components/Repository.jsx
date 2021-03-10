import React from 'react'
import { RepositoryItem } from './RepositoryItem.jsx'
const reposity = {
    name: 'unform',
    description: 'Forms in React ',
    link: "http://github.com/unform/unform",
}
const Repository = () => {
    return (
        <section className="repositoty-list">
            <h1>Lista de Repositorio</h1>

            <ul>


                <RepositoryItem
                    repository={reposity}


                />
                <RepositoryItem
                    repository={reposity}


                />
                <RepositoryItem
                    repository={reposity}


                />

            </ul>
        </section>
    )
}

export default Repository
