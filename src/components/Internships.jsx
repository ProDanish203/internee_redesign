import React from 'react'
import { internships } from "../assets/data";

const InternCard = ({data}) => {
    return (
    <div className='rounded-md max-w-[350px] border-[1px] border-neutral-200 cursor-pointer hover:shadow-2xl'>
        <img src={data.image} alt={data.title} 
        className='object-cover h-[200] w-full rounded-md'
        />

        <div className='p-4 rounded-md'>
            <h2 className='text-xl font-bold hover:text-secondary cursor-pointer'>{data.title}</h2>
            <div className='mb-5 mt-3 flex items-center gap-5'>
                <p className='text-neutral-500'> <i className="fas fa-location-dot text-primary"></i> Remote</p>
                <p className='text-neutral-500'> <i className="far fa-clock text-primary"></i> 1 Month</p>
            </div>

            <div className='h-[2px] bg-neutral-200 w-full'/>
            <div className='flex justify-end items-center'>
                <button className='bg-secondary text-white rounded-full mt-5 py-2.5 px-4 text-sm'>Apply Now</button>
            </div>
        </div>
        
    </div>
    )
}

export const Internships = () => {
  return (
    <section className='max-w-[1500px] w-full px-10 mb-10'>
        <h2 className='sm:text-4xl text-3xl font-semibold mb-2'>Recent Internships</h2>
        <p className='font-semibold text-neutral-600 text-sm mb-10 sm:max-w-[600px]'>Internships came after every two months Grab your internships on your favourite domain to boost up yourself in the field of Computer technology</p>

        <div className='flex flex-wrap items-center justify-around gap-5'>
            {internships.map((data, idx) => (
                <InternCard data={data} key={idx}/>
            ))}
        </div>
    </section>
  )
}
