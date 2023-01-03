import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        const review = {
            name:user?.displayName,
            email:user?.email,
            review:data.review,
            ratings:data.rating
        }
        fetch('https://1a247be5b9024cc2975c4660c0c08e86.vfs.cloud9.us-east-1.amazonaws.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        }).then(res=>res.json())
        .then(data=>{
            toast("Review Saved")
            e.target.reset()

        })

    }
    return (
        <div>
            <h1 className='md:text-4xl text-xl font-semibold text-primary text-center my-7'>Post Your Review Here</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                <select className="select select-secondary w-full max-w-xs" {...register("rating")}>
                    <option disabled selected>Ratings?</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <textarea type="text" autoComplete='off' required name="review" placeholder="Your Review" {...register("review")} className="form-control input input-bordered w-full max-w-xs" />
                <input type="submit" value="Post" className="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddReview;