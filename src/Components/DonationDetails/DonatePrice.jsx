 

 import React from 'react'
 import { Link } from 'react-router-dom';
 const DonatePrice = ({buttonData}) => {
    const {picture,description, price, title, category, category_bg_color, card_bg_color, text_button_bg_color} = buttonData;
    return (
        <div className='w-full'>
            <div>
                <div style={{background : card_bg_color}} className='flex gap-6'>
                <img src={picture} alt="" />
                <div>
                    <p>{category}</p>
                    <p>{title}</p>
                    <p>{price}</p>
                     <Link to="/statistics" ><button>View Details</button></Link>
                </div>
                </div>

            </div>
        </div>
    )
 }
 
 export default DonatePrice 