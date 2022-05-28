import React from 'react';
import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';

const AddProduct = (data,e) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        const tools = {
            name: data.name,
            desc: data.desc,
            price: data.price,
            minimum: data.quantity,
            stock: data.stock,
            img: data.image
        }
        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(tools)
        }).then(res=>res.json())
        .then(data=>{
            toast("Tools Added")
            e.target.reset()

        })}



    

    return (
        <div>
            <h1 className='text-2xl text-center text-primary'>Add New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} class="form-control w-full max-w-xs">
                <div>
                    <label class="label">
                        <span class="label-text">Product Name</span>
                    </label>
                    <input type="text" placeholder="Name" name='name' class="input input-bordered w-full max-w-xs"  {...register("name", {
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
                    <label class="label">
                        <span class="label-text">Product Description</span>
                    </label>
                    <textarea type="text" placeholder="Description" name='desc' class="textarea textarea-primary w-full" {...register("desc", {
                        required: {
                            value: true,
                            message: 'Description is Required'
                        }
                    })} />
                    <label className="label">
                        {errors.desc?.type === 'required' && <span className="label-text-alt text-red-500">{errors.desc.message}</span>}
                    </label>
                </div>
                <div>
                    <label class="label">
                        <span class="label-text">Product Price</span>
                    </label>
                    <input type="text" placeholder="Price" name='price' class="input input-bordered w-full max-w-xs" {...register("price", {
                        required: {
                            value: true,
                            message: 'Price is Required'
                        },
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Provide a valid Price'
                        }
                    })} />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        {errors.price?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>
                <div>
                    <label class="label">
                        <span class="label-text">Minimu Quantity</span>
                    </label>
                    <input type="number" placeholder="Min Qnt" name='quantity' class="input input-bordered w-full max-w-xs" {...register("quantity", {
                        required: {
                            value: true,
                            message: 'Quantity is Required'
                        }
                    })} />
                    <label className="label">
                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                    </label>
                </div>
                <div>
                    <label class="label">
                        <span class="label-text">Stock Available</span>
                    </label>
                    <input type="number" placeholder="Available" name='stock' class="input input-bordered w-full max-w-xs" {...register("stock", {
                        required: {
                            value: true,
                            message: 'Stock is Required'
                        }
                    })} />
                    <label className="label">
                        {errors.stock?.type === 'required' && <span className="label-text-alt text-red-500">{errors.stock.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        type="text" name='image'
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'ImageUrl is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>
                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;