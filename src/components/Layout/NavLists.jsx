import React from 'react'
import { Link } from 'react-router-dom'


const NavLists = ({ listId, title, Icon, bottomMargin }) => {

    return (
        <div className={`listItemMainBox w-16 mx-auto flex items-center ${bottomMargin && "mb-2"} cursor-pointer`}>
            {Icon && <Icon className="listItemIcon text-slate-400 mr-5" />}
            {Icon ? <h2 className={`${Icon ? "text-2xl" : "text-base"} text-black transition-all`}>
                {title}
            </h2> : <Link to={`/playlist/${listId}` || "#"} className='navLinks text-slate-400 focus:text-white hover:text-white'>
                <p className={`${Icon ? "text-2xl" : "text-base"} text-black transition-all`}>
                    {title}
                </p>
            </Link>}
        </div>
    )
}

export default NavLists 