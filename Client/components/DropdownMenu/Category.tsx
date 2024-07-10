import React, {useState, useEffect} from 'react'
import { categoryDropDown } from '@/app/data'
const Category = () => {
    const [margin, setMargin] = useState(10);
    const [opacity, setOpacity] = useState(0);
    
    useEffect(() => {
        const timer = setTimeout(() => {
        setMargin(0);
        setOpacity(1);
        }, 5);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, []);
  return (
    <div style={{
        marginTop: `${margin * 0.25}rem`,
        opacity: opacity,
        transition: 'margin-top 0.2s ease-in-out, opacity 0.3s ease-in-out'
      }} className='xl:min-h-[450px] xl:min-w-[1280px] min-h-[400px] min-w-[1000px] xl:-left-40 z-30 absolute bg-white flex gap-5 rounded-lg drop-shadow-md px-8 py-8'>
        {categoryDropDown.map((each,index)=>
            <div key={index}>
                <div className='border-b-[1px] pb-3'>
                <a href={`/categories/${each.catLink}`} className='font-semibold text-base'>{each.title}</a>
                </div>
                <div className='flex flex-col gap-2 mb-8 mt-5'>
                    {each.subCategories.map((each,index)=>
                        <a href={each.link} className='text-silver hover:text-salmon' key={index}>{each.title}</a>
                    )}
                </div>
                <a href={each.imgRedirectLink}><img height={80} width={300} className='rounded-lg' src={each.imgLink}/></a>
            </div>
        )}
    </div>
  )
}

export default Category