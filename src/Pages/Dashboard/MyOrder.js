import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    console.log(user.email)
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`https://thawing-cove-92314.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user])

    const deleteOrder = () => {

    }

    const confirmOrder = () => {

    }

    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Number</th>
                            <th>Total Price</th>
                            <th>Address</th>
                            <th>Confirm Order</th>
                            <th>Delete Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.email}</td>
                                <td>{order.product}</td>
                                <td>{order.phone}</td>
                                {/* <td>{order.quantity}</td> */}
                                <td>{order.total}</td>
                                <td>{order.address}</td>
                                <td><button onClick={()=>{confirmOrder(order._id)}} className="btn btn-xs">Confirm Order</button></td>
                                <td><button onClick={()=>{deleteOrder(order._id)}}  className="btn btn-xs">Remove User</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;