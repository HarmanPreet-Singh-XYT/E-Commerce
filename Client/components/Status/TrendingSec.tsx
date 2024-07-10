import Link from 'next/link';
import React from 'react';

interface DataPattern {
  data: {
    productid: number;
    title: string;
    price: number;
    discount: number;
    imglink: string;
    imgalt: string;
    category_name: string;
    maincategory:string;
  }[];
  isSecondary:boolean;
}

const TrendingPrimary = (props:DataPattern) => {
  function categoryLink(maincategory:string,category:string){
    const splitCat = category.split(' ').join('-');
    return `/sub-category/${maincategory}/${splitCat}`
  }
  return (
    <>
      {props.data.map((each, index) => (
        <div
          key={index}
          className={`flex mt-5 ${!props.isSecondary && 'mr-5'} static border-[1px] rounded-xl mb-2 min-w-[310px] max-w-[310px] h-[110px] items-center`}
        >
          <Link href={`/product/${each.productid}`}>
            <img
              className="ml-2 w-[75px] h-[60px] rounded-md"
              src={each.imglink}
              alt={each.title}
            />
          </Link>
          <div className="ml-2 w-[200px]">
            <Link href={`/product/${each.productid}`}>
              <p className="text-[16px] text-eblack font-semibold tracking-normal overflow-hidden whitespace-nowrap text-ellipsis w-full">
                {each.title}
              </p>
            </Link>
            <Link href={categoryLink(each.maincategory,each.category_name)}>
              <p className="tracking-normal text-silver font-normal text-[14px] hover:text-salmon">
                {each.category_name}
              </p>
            </Link>
            <div className="flex items-center">
              <p className="text-lg text-salmon font-bold">${each.discount}</p>
              <p className="text-sm line-through font-normal ml-4 text-silver">
                ${each.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TrendingPrimary;