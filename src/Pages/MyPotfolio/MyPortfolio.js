import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold text-primary'>My Portfolio</h1>
            <div>
                <div class="card w-full bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Name : Avirup Mondol</h2>
                        <h2 class="card-title">Email : avirupmondal19@gmail.com</h2>
                        <h2 class="card-title">Education : Bsc in CSE from Independent University Bangladesh </h2>
                        <h2 class="card-title">Passing Year : 2021, November</h2>
                        <p>List of Skill as a Web-Developer That I Know</p>
                        <ol class="list-decimal">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Tailwind</li>
                            <li>Bootstrap</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ol>
                        <h2 class="card-title">Some of My Projects Link</h2>
                        <ol class="list-decimal">
                            <li>Warehouse Management System: <a href="https://warhouse-management-system.web.app/">https://warhouse-management-system.web.app/</a></li>
                            <li>Photography Service Website: <a href="https://moments-photography-8829a.web.app/">https://moments-photography-8829a.web.app/</a></li>
                            <li>Manufacture Website: <a href="https://product-manufacture-auth.web.app/">https://product-manufacture-auth.web.app/</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;