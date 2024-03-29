import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [alloders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://35.163.32.74:5000/confirm',
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
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alloders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.user}</td>
                                <td>{order.name}</td>
                                <td>{order.phone}</td>
                                {/* <td>{order.quantity}</td> */}
                                <td>{order.price}</td>
                                <td>{order.address}</td>
                                <td className='text-green-700 text-xl'>Paid</td>
                            </tr>)
                        }
                        

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;