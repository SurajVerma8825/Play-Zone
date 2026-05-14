import React from 'react'

const CategoryCard = ({ title, subtitle, image }) => {
  return (
     <div className='bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-1 transition-all duration-300'>
      <img src={image} alt={title} className='w-14 h-14' />

      <h3 className='mt-5 text-xl font-bold text-slate-900'>
        {title}
      </h3>

      <p className='text-slate-500 mt-1'>{subtitle}</p>
    </div>
  )
}

export default CategoryCard
