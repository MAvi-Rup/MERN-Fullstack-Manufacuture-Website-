import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const navigate = useNavigate()
    const {_id,name,price,desc,stock,minimum,img} = tool;
    const navigateProduct = id =>{
        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="md:px-10 md:pt-10 card-side">
                    <img src={img} alt="Shoes" class="rounded-lg shadow-2xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{desc}</p>
                    <h2 class="card-title">Price: {price} BDT</h2>
                    <h2>Min-Order Quantity: {minimum} /p</h2>
                    <h2>Available Quantity: {stock} /p</h2>
                    <div class="card-actions">
                        <button onClick={()=>{navigateProduct(_id)}} class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tool;