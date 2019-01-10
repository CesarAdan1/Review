import React from 'react'
import NewsItem from './NewlistItems'

const Newlist = (props) => {
    //console.log(props.donkey)

    const items = props.news.map((item)=>{
        return(
            
           <NewsItem key={item.id} item={item}/>
           
        )
    })
    //pass props to their children
    return (
        <div>
            {props.children}
            {items}
        </div>
    )
}

export default Newlist;