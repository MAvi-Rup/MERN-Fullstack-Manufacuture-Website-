import React from 'react';

const Bolgs = () => {
    return (
        <div>
            <h1 className='text-3xl text-center'>This is our Blogs Website</h1>
            <div className='grid grid-cols-2'>
                <div className='border-4'>
                    <h1 className='text-xl font-bold'>How will you improve the performance of a React Application?</h1>
                    <p className='text-xl'>To inprove the prformace of the react application first you have to stop uncessary rerendaring of any components. Then you don't pass props whwre its not needed. Don' Load all the data whwre its not needed its also makes your application slow. And finally make your website images optimize that its can load easily. So by avoiding this you can make your react application faster. </p>

                </div >
                <div className='border-4'>
                    <h1 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h1>
                    <p className='text-xl'>Answer: There are different states we manage in our react application. Firstly, the local state that we are mostly manage by using useSatae. Then there are global state like when we want to get and updated the data everywhere. Like authentication state when user login in our website. Then we can manage the server state when we get or updated data and need a updated ui from the server then we use the server state like react query. So these are the some different uses of react state</p>

                </div>
                <div className='border-4'>
                    <h1 className='text-xl font-bold'>How does prototypical inheritance work?</h1>
                    <p className='text-xl'>Answer: Javascript is a prototype based object orented language.In Javascript prototypical inheritance Object and methods can be shared extended and copied.Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function </p>

                </div>
                <div className='border-4'>
                    <h1 className='text-xl font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                    <p className='text-xl'>Answer: We dont directly set the state because if we do that we cant change the value of the state and show in the ui. And also directly update the state , it doesn't change the value of the state immedietly. it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components. For this reason we dont use a state directly, if we do that we lose the control of the state.</p>

                </div>
                <div className='border-4'>
                    <h1 className='text-xl font-bold'>What is a unit test? Why should write unit tests?</h1>
                    <p className='text-xl'>Answer: In unit testing individual unit or components of a software are tested. In there all the feature, components and the value are tested that working properly or not. Unit testing are dine during the development of an application.Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. </p>

                </div>

            </div>
            
        </div>
    );
};

export default Bolgs;