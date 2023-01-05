import React from 'react';
import { toast } from 'react-toastify';


const DeleteTool = ({tool,setTools,tools}) => {
    
    const { _id, name, price, desc, stock, minimum, img } = tool;

    const deletProduct = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://35.163.32.74:5000/tools/${id}`
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = tools.filter(tool => tool._id !== id);
                    setTools(remaining);
                    toast("Tools Deleted")
                })
        }
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
                    <button onClick={() => { deletProduct(_id) }} className="btn btn-primary">Delete Product</button>
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteTool;