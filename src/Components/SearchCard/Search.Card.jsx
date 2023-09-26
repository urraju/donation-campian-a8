

import React, { useEffect, useState } from 'react'
import HomeCard from '../HomeCard/HomeCard';

const SearchCard = ({searchData, buttonValue}) => {
    const [filterValue , setFilterValue] = useState([])
   
    console.log(searchData);
      useEffect(() => {
        const value = searchData.filter(item => item.category ===  buttonValue)
        
        setFilterValue(value)
        console.log(filterValue);
       
      },[])
       
    return (
        <div>
            <div>
              
            </div>
        </div>
    )
}

export default SearchCard