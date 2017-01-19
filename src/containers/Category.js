import React from 'react'
import { connect } from 'react-redux'
import Children from './../components/Children'

let Category = ({name, children, id}) => {
    return (
        <div> 
            <ul>
                <Children key={id} name={name} children={children} id={id}/>
            </ul>
        </div>
    );
}

let mapStateToProps = state => {
    return state.category;
}

let mapDispatchToProps = dispatch => {
    return {};
}

Category = connect(mapStateToProps, mapDispatchToProps)(Category);

export default Category;
