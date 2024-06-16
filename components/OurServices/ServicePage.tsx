import React from 'react'
import { serviceFeatures } from '@/app/data'
const ServicePage = () => {
  return (
    <div className='border-t-[1px] w-screen'>
        {serviceFeatures.map((each,index)=> index % 2===0 ?
        
            <section key={index} className='flex justify-center mx-auto flex-col w-[80%] lg:flex-row gap-20 rounded-xl mt-10 mb-10'>
                <div className='flex flex-col justify-center items-center gap-10 px-2 py-2 rounded-2xl text-center'>
                    <h1 className='text-5xl font-semibold text-davysilver text-center'>{each.title}</h1>
                    <p className='max-w-[600px] text-silver'>{each.description}</p>
                </div>
                <img className='rounded-xl py-5 px-5 mx-auto' height={400} width={400} alt={each.imgAlt} src={each.imgLink}/>
            </section>
        
        :
        <section key={index} className='flex justify-center mx-auto flex-col w-[80%] lg:flex-row gap-20 rounded-xl mt-10 mb-10'>
                <img className='rounded-xl py-5 px-5 mx-auto' height={400} width={400} alt={each.imgAlt} src={each.imgLink}/>
                <div className='flex flex-col justify-center items-center gap-10 px-2 py-2 rounded-2xl text-center'>
                    <h1 className='text-5xl font-semibold text-davysilver text-center'>{each.title}</h1>
                    <p className='max-w-[600px] text-silver'>{each.description}</p>
                </div>
        </section>
        )}
    </div>
  )
}

export default ServicePage;