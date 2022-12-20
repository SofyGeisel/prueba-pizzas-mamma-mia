import React, { useContext } from 'react'
import { Link } from 'react-router-dom';


function Item({info}) {

  return (
    
    <Link to={`/pizza/${info.id}`} className='unapizza'>
        <img src={info.img} alt='' />
        <p>{info.name}</p>

    </Link>
  )
}

export default Item