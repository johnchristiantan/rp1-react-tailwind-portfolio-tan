import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Nav = () => {
    const pages = [
        {
          name: 'Home', link: '/'
        },
        {
          name: 'About', link: '/about'
        },
        {
          name: 'Skills', link: '/skills'
        },
        {
          name: 'Experiences', link: '/experiences'
        },
        {
          name: 'Projects', link: '/projects'
        },
        {
          name: 'Contacts', link: '/contacts'
        },
    ]
    const [open, setOpen]= useState(true)
  return (
    <nav className='fixed w-full pb-12 pl-4 text-white bg-yellow-800 shadow-lg md:p-0 md-flex md:h-16'>
        
        {/* <EmojiEmotionsIcon/> JC */}
        <span className='absolute top-4 left-4'>JC 😁</span>
        <ul className={`mt-14 md:mt-0 justify-around md:mx-24 md:h-16 ${open && 'hidden' } md:flex`}> 
        {/* md-flex  is the flex direction | align horizontally*/}
        {/* // => @media (min-width: 768px) { ... } */}
            {pages.map(page => {
                return (
                    <li className='py-2 md:mt-3' key={page.name}><Link to={page.link} onClick={() => setOpen(!open)}>{page.name}</Link></li>
                )
            })
            }
            <button className='p-1 mt-2 bg-red-600 rounded-md md:h-10 md:mt-3' >Contact Me</button>
        </ul>
        <button  onClick={()=> setOpen(!open)}>
          {open?<span className='absolute text-2xl md:hidden right-4 top-4'>🍔</span>:
            <span className='absolute text-2xl md:hidden right-4 top-4'>🍟</span>
           }
           </button>
    </nav>
    
  )
}

export default Nav