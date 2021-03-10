import React from 'react'
const nome = 'douglas'
export const RepositoryItem = (props) => {
    return (
        <li>
        <strong>
            {props.repository?.link ?? 'Default' }
        </strong>
        <p>
            {props.repository?.name ?? 'Default' }</p>
        <a href={props.repository?.link ?? 'Default' } target='blank'>
            Acessar repositorio
        </a>
     </li>
    )
}
