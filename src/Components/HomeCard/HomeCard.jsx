

import React from 'react'
import { Link } from 'react-router-dom';

const HomeCard = ({data}) => {
    const {id,picture, title, category, category_bg_color, card_bg_color, text_button_bg_color} = data;
    return (
       
       <Link to={`/donation/${id}`}>
        <div style={{background : card_bg_color}} className='space-y-3 rounded-lg'>
           <img className='mx-auto' src={picture} alt="" />
           <div className='px-2'>
           <p style={{background : category_bg_color, color : text_button_bg_color}} className='font-bold inline-block px-3 rounded-sm mb-2'>{category}</p>
           <p style={{color : text_button_bg_color}} className='font-bold mb-4 '>{title}</p>
           </div>
           
        </div>
       </Link>
    )
}

export default HomeCard