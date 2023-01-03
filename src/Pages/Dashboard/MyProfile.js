import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    // const [admin]= useAdmin(user)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const updateProfile = {
            name:data.name,
            number: data.number,
            address: data.address
        }
        fetch(`https://1a247be5b9024cc2975c4660c0c08e86.vfs.cloud9.us-east-1.amazonaws.com/user/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProfile)
        }).then(res => res.json())
            .then(data => {
                toast("Profile Updated")
                e.target.reset()
            })
    }

    return (
        <div>
            <div>
                <h1 className='text-2xl text-center text-primary'>Update Your Profile</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs">
                    <div>
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name='name' className="input input-bordered w-full max-w-xs" {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" value={user.email} disabled placeholder="email" name='email' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Your Address</span>
                        </label>
                        <textarea type="text" placeholder="Your Address" name='address' className="textarea textarea-primary w-full" {...register("address", {
                            required: {
                                value: true,
                                message: 'Address is Required'
                            }
                        })} />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Your Number</span>
                        </label>
                        <input type="text" placeholder="Number" name='number' className="input input-bordered w-full max-w-xs" {...register("number", {
                            required: {
                                value: true,
                                message: 'Number is Required'
                            },
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'Provide a valid Number'
                            }
                        })} />
                        <label className="label">
                            {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                            {errors.number?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                        </label>
                    </div>
                    <input className='btn w-full max-w-xs text-white' type="submit" value="Update Profile" />
                </form>
            </div>



        </div>
    );
};

export default MyProfile;