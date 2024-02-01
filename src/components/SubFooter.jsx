import React from 'react'
import { Link } from 'react-router-dom'

export const SubFooter = () => {
  return (
    <footer className='bg-primary text-[12px] text-white py-5'>
      <div className='max-w-[1600px] w-full mx-auto flex max-sm:gap-5 flex-wrap items-center justify-around'>

        <div className='flex items-center gap-4'> 
          <p>Copyright &copy; Internee.pk 2024</p>
          <div>
            <Link>Privacy Policy</Link>
            <Link className='ml-2'>Terms</Link>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <i className='fab fa-twitter w-9 h-9 rounded-full text-white bg-secondary flex items-center justify-center text-lg'></i>
          <i className='fab fa-facebook w-9 h-9 rounded-full text-white bg-secondary flex items-center justify-center text-lg'></i>
          <i className='fab fa-linkedin w-9 h-9 rounded-full text-white bg-secondary flex items-center justify-center text-lg'></i>
          <i className='fab fa-instagram w-9 h-9 rounded-full text-white bg-secondary flex items-center justify-center text-lg'></i>
          <i className='fab fa-youtube w-9 h-9 rounded-full text-white bg-secondary flex items-center justify-center text-lg'></i>

        </div>

        <div>
          <p className='font-light'><span>Powered By: </span> <span className='font-bold'>Techvio Chats</span></p>
        </div>

      </div>
    </footer>
  )
}
