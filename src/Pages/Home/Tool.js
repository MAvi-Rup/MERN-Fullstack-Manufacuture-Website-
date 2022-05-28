import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Tool = ({ tool }) => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const { _id, name, price, desc, stock, minimum, img } = tool;
    const navigateProduct = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="md:px-10 md:pt-10 card-side">
                    <img src={img} alt="Shoes" className="rounded-lg shadow-2xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{desc}</p>
                    <h2 className="card-title">Price: {price} BDT</h2>
                    <h2>Min-Order Quantity: {minimum} /p</h2>
                    <h2>Available Quantity: {stock} /p</h2>
                    <div className="card-actions">
                        {
                            admin ? <button disabled onClick={() => { navigateProduct(_id) }} className="btn btn-primary">Buy Now</button> : <button onClick={() => { navigateProduct(_id) }} className="btn btn-primary">Buy Now</button>

                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tool;