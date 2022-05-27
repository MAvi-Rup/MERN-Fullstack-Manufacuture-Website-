import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast} from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const Purchase = () => {
    const { id } = useParams()
    const [user, loading, error] = useAuthState(auth);
    const [tool, setTool] = useState({})
    
    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id])
    const { minimum, stock,name,price } = tool

    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = (data,e) => {
        const totalPrice = parseInt(data.quantity)*price
        const order = {
            product: name,
            quantity:data.quantity,
            total:totalPrice,
            email: user.email,
            userName: user.displayName,
            phone: data.number,
            address: data.address
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        }).then(res=>res.json())
        .then(data=>{
            toast("Order Saved")
            e.target.reset()

        })

    }


    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left md:w-1/2">
                        <h1 class="text-3xl font-bold">{tool.name}</h1>
                        <p class="py-3">{tool.desc}</p>
                        <h1 class="text-2xl font-semibold">Price: <span className='text-primary'>{tool.price} BDT</span></h1>
                        <h1 class="text-2xl font-semibold">Minimum Order Quantity: <span className='text-primary'>{tool.minimum}</span></h1>
                        <h1 class="text-2xl font-semibold">Stock Available: <span className='text-primary'>{tool.stock}</span></h1>
                    </div>
                    <div class="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <img src={tool.img} class="rounded-lg shadow-2xl" />
                    </div>
                </div>

            </div>
            <div className='my-6'>
                <h3 className="font-bold text-center text-lg text-primary">Purchase</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 justify-items-center mt-2 form-control'>
                    <label className='label text-left'>Quantity</label>
                    <input type="number" autoComplete='off' name='quantity'placeholder='3000' {...register("quantity", { min: minimum, max: stock })} className="input input-bordered w-full max-w-xs" />
                    <p className='text-red-700 text-xl font-bold'>
                     {errors.quantity && `Error: Minimum order quantity is ${minimum} & maximum quantity is ${stock}`}
                    </p>
                    <input type="text" name="name" disabled value={user?.displayName || ''} {...register("name")} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name="email" disabled value={user?.email || ''} {...register("email")} className="input input-bordered w-full max-w-xs" />
                    <input type="text" autoComplete='off' required name="number" placeholder="Phone Number" {...register("number")} className="input input-bordered w-full max-w-xs" />
                    <input type="text" autoComplete='off' required name="address" placeholder="Address" {...register("address")} className="input input-bordered w-full max-w-xs" />
                    {
                        errors.quantity ?  <input type="submit" disabled value="Purchase" className="btn btn-secondary w-full max-w-xs" />:<input type="submit" value="Purchase" className="btn btn-secondary w-full max-w-xs" />
                    }
                    
                </form>


            </div>


        </div>
    );
};

export default Purchase;