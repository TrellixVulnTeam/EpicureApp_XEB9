import React from 'react';
import {Link} from 'react-router-dom';

//create and place page links:
const PageSelector:React.FC = ({}) => {

    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className='pageSelector'>
            {pages.map(page => (<Link key={page} className="page" to={`/page/${page}`}>{page}</Link>))}
        </div>
    )
}

export default PageSelector;