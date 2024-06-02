import { products } from '@/app/data'
import React from 'react'
import ReactStars from 'react-stars';
const Products = () => {
  return (
    <div className='sm:ml-4 ml-auto p-2 mr-auto mt-10 pb-8 max-w-[980px] flex flex-col flex-1'>
      <p className='border-b-[1px] leading-[50px] tracking-wide font-semibold text-lg'>New Products</p>
      <div className='flex flex-wrap mt-8 gap-5 justify-center max-w-[980px] flex-1'>
        {products.map((each, index) =>
          <div key={index} className='relative flex flex-col border-[1px] rounded-xl sm:max-w-[220px] p-1 overflow-hidden'>
            {each.params.isSale && <div className="absolute top-2 -left-8 bg-black text-white px-10 py-1 z-10 rotate-[320deg] text-[12px] uppercase rounded">
              SALE
            </div>}
            {each.params.isNew && <div className="absolute top-2 -left-8 bg-salmon text-white px-10 py-1 z-10 rotate-[320deg] text-[12px] uppercase rounded">
              New
            </div>}
            {each.params.isDiscount && <div className="absolute top-2 left-2 bg-green-500 text-white px-2 text-md uppercase rounded">
              {each.discount}%
            </div>}
            <div>
              <img className='min-w-[200px] min-h-[210px]' src={each.imgLink} alt={each.title} />
            </div>
            <div className='pl-4 pr-4 flex flex-col gap-2'>
              <a href=''><p className='text-[14px] text-salmon'>{each.category}</p></a>
              <a href=''><p className='tracking-[1px] text-silver hover:text-davysilver'>{each.title}</p></a>
              <div className='flex items-center gap-2'>
                <ReactStars count={5} value={each.stars} size={20} edit={false} color2={'#ffd700'} />
                {each.ratingCount > 0 && <p className=' text-silver'>{each.ratingCount}</p>}
              </div>
              
              <div className='flex mb-5 items-center gap-4'>
                <p className='font-bold text-[18px]'>${each.price.discountPrice.toFixed(2)}</p>
                <p className='line-through'>${each.price.basePrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
