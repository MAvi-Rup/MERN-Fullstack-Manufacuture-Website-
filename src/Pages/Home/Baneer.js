import React from 'react';

const Baneer = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://i.ibb.co/JFbfH89/banner1.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                    <div class="absolute flex content-end justify-center text-center hidden md:block transform -translate-y-1/2 left-5 right-5 top-3/4">
                        <h1 className="text-4xl text-white">Here Some of our Flooring Works...</h1>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://i.ibb.co/h9BQTQy/banner2.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                    <div class="absolute flex content-end justify-center text-center hidden md:block transform -translate-y-1/2 left-5 right-5 top-3/4">
                        <h1 className="text-4xl text-white">Matching with House Interior</h1>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://i.ibb.co/J7zk4H0/banner3.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                    <div class="absolute flex content-end justify-center text-center hidden md:block transform -translate-y-1/2 left-5 right-5 top-3/4">
                        <h1 className="text-4xl text-black font-bold">Whiter than white tiles available</h1>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://i.ibb.co/tHCzQFJ/banner4.jpg" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                    <div class="absolute flex content-end justify-center text-center hidden md:block transform -translate-y-1/2 left-5 right-5 top-3/4">
                        <h1 className="text-3xl text-white font-bold">Wooden Tiles Available Here</h1>
                    </div>
                </div>
            </div>
            <div class="flex text-center hidden md:block w-full py-2 gap-2">
                <a href="#slide1" class="btn btn-xs">1</a>
                <a href="#slide2" class="btn btn-xs mx-0.5">2</a>
                <a href="#slide3" class="btn btn-xs mx-0.5">3</a>
                <a href="#slide4" class="btn btn-xs">4</a>
            </div>
        </div>

    )

};

export default Baneer;




