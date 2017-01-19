import React from 'react'
import displayName from './../eventHandlers/displayName'

let Children = ({id, name, children}) => {
    if (children)  {
        children = children.map(childElement => <Children key={childElement.id} name={childElement.name} children={childElement.children} />)

        return (
            <li>
                <div className="wrap" id={id === 1 ? "one" : null}>
                    <div className="hover" onClick={displayName}> {name} <span> > </span> </div>
                </div>
            <div className="Child">
                <ul>
                    {children}
                </ul>
            </div>
            </li>
        );
    } else {
        return (
            <li>
                <div className="wrap" id={id === 1 ? "one" : null}>
                    <div className="hover"> {name} </div>
                </div>
            </li>
        );
    }
}

export default Children