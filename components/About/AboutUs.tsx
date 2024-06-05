import React from 'react'
import { aboutUS } from '@/app/data'
const AboutUs = () => {
  return (
    <div className='border-t-[1px] w-screen'>
        {aboutUS.section1.map((each,index)=> index % 2===0 ?
        
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
        <section className='flex justify-center mx-auto flex-col w-[80%] lg:flex-row gap-20 rounded-xl mt-10 mb-10'>
            <div className='flex flex-col justify-center items-center gap-10 px-2 py-2 rounded-2xl text-center'>
                <h1 className='text-5xl font-semibold text-davysilver text-center'>{aboutUS.section2.title}</h1>
                <ul className='text-start flex flex-col gap-5'>
                    {aboutUS.section2.listPoints.map((each,index)=>
                        <li className='max-w-[600px] text-davysilver' key={index}><span className='font-semibold'>{each.title}:</span> {each.description}</li>
                    )}
                </ul>
            </div>
            <img className='rounded-xl py-5 px-5 mx-auto' height={500} width={500} alt={aboutUS.section2.imgAlt} src={aboutUS.section2.imgLink}/>
        </section>
        <section className='flex justify-center mx-auto flex-col w-[80%] lg:flex-row gap-20 rounded-xl mt-10 mb-10'>
            <div className='flex flex-col justify-center items-center gap-10 px-2 py-2 rounded-2xl text-center'>
                <h1 className='text-5xl font-semibold text-davysilver text-center'>{aboutUS.section3.title}</h1>
                {aboutUS.section3.description.map((each,index)=>
                    <p key={index} className='max-w-[600px] text-silver'>{each}</p>
                )}
            </div>
        </section>
    </div>
  )
}

export default AboutUs