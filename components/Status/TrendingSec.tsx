import React from 'react';

interface DataPattern {
  data: {
    productLink: string;
    imgLink: string;
    title: string;
    catLink: string;
    category: string;
    discountPrice: number;
    basePrice: number;
  }[];
  isSecondary:boolean;
}

const TrendingPrimary = (props:DataPattern) => {
  return (
    <>
      {props.data.map((each, index) => (
        <div
          key={index}
          className={`flex mt-5 ${!props.isSecondary && 'mr-5'} static border-[1px] rounded-xl mb-2 min-w-[310px] max-w-[310px] h-[110px] items-center`}
        >
          <a href={each.productLink}>
            <img
              className="ml-2 w-[75px] h-[60px] rounded-md"
              src={each.imgLink}
              alt={each.title}
            />
          </a>
          <div className="ml-2 w-[200px]">
            <a href={each.productLink}>
              <p className="text-[16px] text-eblack font-semibold tracking-normal overflow-hidden whitespace-nowrap text-ellipsis w-full">
                {each.title}
              </p>
            </a>
            <a href={each.catLink}>
              <p className="tracking-normal text-silver font-normal text-[14px] hover:text-salmon">
                {each.category}
              </p>
            </a>
            <div className="flex items-center">
              <p className="text-lg text-salmon font-bold">${each.discountPrice.toFixed(2)}</p>
              <p className="text-sm line-through font-normal ml-4 text-silver">
                ${each.basePrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TrendingPrimary;