import React from 'react';

const ReviewCard = ({ reviews }) => {
    const { name, email, review, ratings } = reviews;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><span className='text-secondary'>Customer Name: </span>{name}</h2>
                    <h2 className="text-xl"><span className='text-secondary'>Customer Email: </span> {email}</h2>
                    
                    <p>{review}</p>
                    <h2 className="text-xl font-semibold text-primary">Ratings: {ratings}</h2>
                </div>
            </div>


        </div>
    );
};

export default ReviewCard;