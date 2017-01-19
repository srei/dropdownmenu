import React from 'react'
import displayName from './../eventHandlers/displayName'

let Children = ({id, name, children}) => {
    if (children)  {
        children = children.map(childElement => <Children key={childElement.id} name={childElement.name} children={childElement.children} />)

        return (
            <div>
                <button onClick={displayName}> {name} <span> > <span> </button>
            </div>
            <div>
                <ul>
                    {children}
                </ul>
            </div>
        );
    } else {
        return (
            <li>
                <div>
                    <button> {name} </button>
                </div>
            </li>
        );
    }
}