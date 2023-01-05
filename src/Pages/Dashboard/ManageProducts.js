import React, { useEffect, useState } from 'react';
import DeleteTool from './DeleteTool';

const ManageProducts = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://35.163.32.74:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))

    }, [tools])
    return (
        <div>
            <h1 className='text-center md:text-4xl text-xl font-serif font-semibold underline md:my-9 my-4'>Our Tools</h1>
            <div className='grid sm:grid-cols-1 sm:justify-center md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-6 md:my-5 my-3'>
                {
                    tools.map(tool => <DeleteTool key={tool._id} setTools={setTools} tools={tools} tool={tool}></DeleteTool>)
                }
            </div>


        </div>
    );
};

export default ManageProducts;