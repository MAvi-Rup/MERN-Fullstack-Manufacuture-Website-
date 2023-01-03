import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    // console.log(user.email)
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`https://1a247be5b9024cc2975c4660c0c08e86.vfs.cloud9.us-east-1.amazonaws.com/order?email=${user.email}`, {
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
    }, [user,orders])

    const [confirmOrders, setConfirm]= useState(false)
    useEffect(()=>{

    },[confirmOrders])




    const deleteOrder = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://1a247be5b9024cc2975c4660c0c08e86.vfs.cloud9.us-east-1.amazonaws.com/order/${id}`
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                    toast("Order Deleted")
                })
        }
    }

    const confirmOrder = (order) => {
        const orderObj = {
            user:order.email,
            name: order.product,
            price: order.total,
            address: order.address,
            phone: order.phone
        }
        fetch(`https://1a247be5b9024cc2975c4660c0c08e86.vfs.cloud9.us-east-1.amazonaws.com/confirm`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(orderObj)
                toast('Order Confirm')
                setConfirm(true)
            })
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
                                <td>{confirmOrders == false ? <button onClick={() => { confirmOrder(order) }} className="btn btn-xs">Confirm Order</button>:<button onClick={() => { confirmOrder(order) }} className="btn btn-xs" disabled>Confirm Order</button>}</td>
                                <td>{confirmOrders == false ? <button onClick={() => { deleteOrder(order._id) }} className="btn btn-xs">Delete Order</button>:<button disabled onClick={() => { deleteOrder(order._id) }} className="btn btn-xs">Delete Order</button>}</td>
                            </tr>)
                        }
                        

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;