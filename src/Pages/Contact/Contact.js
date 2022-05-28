import React from 'react';

const Contact = () => {

    return (
        <div>
            <h1 className="text-4xl text-center text-primary text-semibold">Contact Us</h1>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Your email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <textarea type="text" placeholder="password" class="textarea textarea-primary w-full textarea-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Send Us Your Message!</h1>
                        <p class="py-6">We are alaways ready to help you. Please send your message Here. We give you proper support.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Contact;