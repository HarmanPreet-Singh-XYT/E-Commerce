import { cards } from '@/app/data'
import React from 'react'

const Tabs = () => {
  return (
    <div className='w-[80%] h-auto gap-5 m-5 flex justify-center mt-10 mb-10'>
      <div className='flex overflow-x-auto gap-5 snap-mandatory snap-x'>
          {cards.map((each, index) => (
            <div key={index} className='flex flex-col gap-5 min-w-[300px] snap-center'>
              <a href={each.cardLink}>
                <img width={300} className='rounded-xl' src={each.imgLink} alt={each.title} />
              </a>
              <div className='flex flex-col max-w-[300px]'>
                <a href={each.categoryLink} className='text-salmon'>{each.category}</a>
                <a href={each.cardLink} className='font-bold tracking-wider text-lg mb-2'>{each.title}</a>
                <p className='text-silver tracking-wider'>By <span className='text-davysilver'>{each.poster}</span> / {each.postDate}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tabs;

