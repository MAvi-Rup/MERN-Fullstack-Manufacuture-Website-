import React from 'react';
import { toast } from 'react-toastify';

const UserTable = ({user,refetch}) => {
    const { email,role} = user;
   
    const setAdmin = () => {
        fetch(`https://1a247be5b9024cc2975c4660c0c08e86.vfs.cloud9.us-east-1.amazonaws.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        
            <tr>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={setAdmin} className="btn btn-xs">Make Admin</button>}</td>
                <td><button className="btn btn-xs">Remove User</button></td>
            </tr>

        
    );
};

export default UserTable;