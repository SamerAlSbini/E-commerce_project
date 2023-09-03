import React from 'react';
import './title.css'
function Title({name}) {
    return (
        <div className='title'>
            <p className='name'>{name}</p>
        </div>
    );
}

export default Title;