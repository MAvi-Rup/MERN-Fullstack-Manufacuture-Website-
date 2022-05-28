import React from 'react';

const Baneer = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/JFbfH89/banner1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex content-end justify-center text-center hidden md:block transform -translate-y-1/2 left-5 right-5 top-3/4">
                        <h1 className="text-4xl text-white">Here Some of our Flooring Works...</h1>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/h9BQTQy/banner2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex content-end justify-center text-center hidden md:block transform -translate-y-1/2 left-5 right-5 top-3/4">
                        <h1 className="text-4xl text-white">Matching with House Interior</h1>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/J7zk4H0/banner3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex content-end justify-center text-center hidden md:block transform -translate-y-1/2 left-5 right-5 top-3/4">
                        <h1 className="text-4xl text-black font-bold">Whiter than white tiles available</h1>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/tHCzQFJ/banner4.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex content-end justify-center text-center hidden md:block transform -translate-y-1/2 left-5 right-5 top-3/4">
                        <h1 className="text-3xl text-white font-bold">Wooden Tiles Available Here</h1>
                    </div>
                </div>
            </div>
            <div className="flex text-center hidden md:block w-full py-2 gap-2">
                <a href="#slide1" className="btn btn-xs">1</a>
                <a href="#slide2" className="btn btn-xs mx-0.5">2</a>
                <a href="#slide3" className="btn btn-xs mx-0.5">3</a>
                <a href="#slide4" className="btn btn-xs">4</a>
            </div>
        </div>

    )

};

export default Baneer;




