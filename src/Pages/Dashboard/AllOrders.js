import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [alloders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://thawing-cove-92314.herokuapp.com/confirm',
            {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                }
            })
            .then(res => res.json())
            .then(data => setOrders(data))

    })
    return (
        <div>
            <h1 className='text-3xl text-primary text-center font bold'>Order Placed {alloders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Number</th>
                            <th>Total Price</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alloders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.email}</td>
                                <td>{order.product}</td>
                                <td>{order.phone}</td>
                                {/* <td>{order.quantity}</td> */}
                                <td>{order.total}</td>
                                <td>{order.address}</td>
                            </tr>)
                        }
                        

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;