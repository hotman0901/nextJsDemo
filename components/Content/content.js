import React from 'react'
import css from './style.scss';


export const Content = (props) => {
    return(
        <div className="c_content">
            <h1>scss content</h1>
            <style jsx>{css}</style>
        </div>
    )
}

export default Content