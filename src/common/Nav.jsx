import React, {useState} from 'react'

// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Nav = () => {
    const pages = [
        {
          name: 'Home', link: '/home'
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
    const [open, setOpen]= useState(false)
  return (
    <nav className='fixed w-full pb-20 pl-4 text-white bg-yellow-800'>
        
        {/* <EmojiEmotionsIcon/> JC */}
        <span className='absolute top-3 left-4'>JC 😁</span>
        <ul className='mt-14'>
            {pages.map(page => {
                return (
                    <li className='py-2' key={page.name}><a href={page.link}>{page.name}</a></li>
                )
            })
            }
            <button className='p-1 mt-2 bg-red-600 rounded-md' >Contact Me</button>
        </ul>
        {open? 
        <button onClick={()=> setOpen(!open)}>
            <span className='absolute text-2xl right-4 top-1'>🍔</span></button>: 
            <button onClick={()=> setOpen(!open)}><span className='absolute text-2xl right-4 top-1'>🍟</span> </button>
        }
    </nav>
  )
}

export default Nav