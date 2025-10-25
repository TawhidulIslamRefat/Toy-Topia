import React, { useEffect, useState } from 'react';
import TopRatingCard from '../TopRatingCard/TopRatingCard';
import { toast } from 'react-toastify';

const TopRating = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch('/top-rating.json')
  .then(res => res.json())
  .then(data => setData(data))
  .catch(error => toast.error(error))
  },[])
  return (
    <div>
      <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold text-center my-10 md:my-20'>Top Rated Product</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
       {
        data.map((data) => <TopRatingCard key={data.productId} data={data}></TopRatingCard>)
       }
    </div>
    </div>
  );
};

export default TopRating;