import React from 'react'
import { NavLink } from 'react-router-dom';

const links = [
    {id:0 , url: '/search', text: '🔎 All' },
    {id:1 , url: '/news', text: '📰 News' },
    {id:2 , url: '/images', text: '📸 Images' },
    // {id:3 , url: '/videos', text: '📺 Videos' },
  ];
  


export const Links = () => {
    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({url,text,id})=>(
                <NavLink  to={url} key={id} className="m-2 mb-0">
                    {text}
                </NavLink >
            ))} 
        </div>
    )
}
