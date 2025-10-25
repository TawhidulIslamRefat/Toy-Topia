import React from 'react';
import { FaStar } from 'react-icons/fa';

const TopRatingCard = ({data}) => {
    const {productName,price,rating,pictureURL,subCategory} =data;
    return (
        <div className='flex'>
            <div className="card bg-base-100 shadow-sm grow" data-aos="fade-up">
  <figure>
    <img className='h-30 md:h-60 lg:h-70 bg-amber-50 m-4 rounded-2xl'
      src={pictureURL}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="text-[14px] md:text-2xl font-medium">{productName}</h2>
    <p className='text-[10px] md:text-[16px]'>{subCategory}</p>
    <div className='flex justify-between'>
        <span className='text-[10px] md:text-[16px] font-medium'>Price : {price}</span>
    <span className='flex gap-1 md:gap-2 items-center text-[10px] md:text-[16px] bg-orange-300 rounded-2xl p-0.5 md:p-1'><FaStar className='text-orange-500 '></FaStar> {rating}</span>
    </div>
  </div>
</div>
        </div>
    );
};

export default TopRatingCard;