import React from 'react';

const Tool = ({tool}) => {
    const {name,price,desc,stock,minimum,img} = tool
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{desc}</p>
                    <h2 class="card-title">Price: {price} BDT</h2>
                    <h2 class="card-title">Min-Order Quantity: {minimum} /p</h2>
                    <h2 class="card-title">Available Quantity: {stock} /p</h2>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tool;