import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewCard from './ReviewCard';

const Review = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch(`https://1a247be5b9024cc2975c4660c0c08e86.vfs.cloud9.us-east-1.amazonaws.com/review`)
        .then(res => res.json()))
        if(isLoading){
            return <Loading></Loading>
        }
    
    return (
        <div className='my-10'>
            <h4 className='text-4xl text-secondary text-center my-12'>All Reviews</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews?.map(review => <ReviewCard
                        key={review._id}
                        reviews={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;