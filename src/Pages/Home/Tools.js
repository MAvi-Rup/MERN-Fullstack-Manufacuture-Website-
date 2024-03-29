import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://35.163.32.74:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))

    }, [])
    return (
        <div>
            <h1 className='text-center md:text-4xl text-xl font-serif font-semibold underline md:my-9 my-4'>Our Tools</h1>
            <div className='grid sm:grid-cols-1 sm:justify-center md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-6 md:my-5 my-3'>
                {
                    tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>


        </div>
    );
};

export default Tools;