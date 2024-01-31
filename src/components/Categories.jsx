import React from 'react'

const CategoryCard = ({icon, title, number}) => {
  return (
    <div className='w-32 h-32 cursor-pointer rounded-full flex flex-col items-center justify-center relative bg-primary border-[10px] hover:border-transparent border-secondary'>
      <i className={`${icon} text-white text-2xl`}></i>
      <p className='text-[10px] text-white text-center'>{title}</p>

      <p className='w-8 h-8 rounded-full flex items-center justify-center absolute top-0 -right-2 bg-secondary text-white'>{number}</p>
    </div>
  )
}

export const Categories = () => {
  return (
    <section className='max-w-[1500px] w-full mx-auto px-3 my-10'>
        <h2 className='text-4xl max-sm:text-3xl font-bold text-center mb-5'>Browse By Categories</h2>
        <div className='flex flex-wrap items-center justify-center gap-14'>
          <CategoryCard icon="fas fa-desktop" title="Website Designing" number={5}/>
          <CategoryCard icon="fas fa-globe" title="Web Development" number={5}/>
          <CategoryCard icon="fas fa-robot" title="CRM's & Chatbot Development" number={4}/>
          <CategoryCard icon="fas fa-pen-nib" title="Graphic Designing & 3D Modeling" number={5}/>
          <CategoryCard icon="fas fa-mobile-screen-button" title="Mobile Application Development" number={6}/> 
        </div>
    </section>
  )
}
