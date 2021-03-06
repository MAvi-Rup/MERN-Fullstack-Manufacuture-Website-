import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-9">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/zh64VwK/hero.jpg" className="md:max-w-sm w-3/4 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="md:text-3xl text-xl font-bold">OUR SERVICES</h1>
                    <h1 className="md:text-5xl text-xl font-bold">WE'RE HERE TO HELP
                    </h1>
                    <p className="py-6">Remodels can be tough, but we’ve got you covered. Our free design services help make the process as smooth and easy as possible. All you have to do is tell us about your space, take home tile samples and watch your dream room come together.</p>
                    <button className="btn btn-primary">More Details</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;

// 