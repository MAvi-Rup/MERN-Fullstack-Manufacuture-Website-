import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserTable from './UserTable';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://1a247be5b9024cc2975c4660c0c08e86.vfs.cloud9.us-east-1.amazonaws.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <h2 className="text-2xl">All Users: {users.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Remove User</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map(user=><UserTable
                       key={user._id}
                       user={user}
                       refetch={refetch}
                       ></UserTable>)
                   }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Users;