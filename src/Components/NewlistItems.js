import React from 'react'

//instead of bringing props use {item}
const NewsItem = ({item}) => {
    return(
        <div>
            <h3>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div>
    )
}

export default NewsItem;