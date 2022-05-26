import React from 'react';

const ReviewCard = ({ reviews }) => {
    const { name, email, review, ratings } = reviews;
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"><span className='text-secondary'>Customer Name: </span>{name}</h2>
                    <h2 class="text-xl"><span className='text-secondary'>Customer Email: </span> {email}</h2>
                    
                    <p>{review}</p>
                    <h2 class="text-xl font-semibold text-primary">Ratings: {ratings}</h2>
                </div>
            </div>


        </div>
    );
};

export default ReviewCard;