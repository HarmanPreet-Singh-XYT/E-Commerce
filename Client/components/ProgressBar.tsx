import React from 'react';

const ProgressBar = ({ sold, total }:{sold:number;total:number}) => {
    const percentage = (sold / total) * 100;

    return (
        <div className='relative flex items-center justify-start mb-2'>
            <div className='h-3 w-[102%] bg-gray-200 absolute rounded-2xl z-0'></div>
            <div className='items-center flex'>
                <div style={{width:`${percentage}%`}} className={`h-1 ml-1 bg-salmon absolute rounded-xl z-10`}></div>
            </div>
        </div>
    );
};

export default ProgressBar;