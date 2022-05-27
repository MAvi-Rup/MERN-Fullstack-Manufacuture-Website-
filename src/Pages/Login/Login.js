import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let handleError;
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user || gUser)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const navigateRegister = event => {
        navigate('/register');
    }
    if (token) {
        navigate(from, { replace: true });
    }
    if (loading || sending || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError) {
        handleError = <p className='text-warning fs-4'>Error:{error?.message || gError?.message}</p>
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        await signInWithEmailAndPassword(email, password);

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }



    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left md:w-1/2">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">Login our website to place an order. And if you like our design and pattern please subscribe our newsletter to get the latest update price and design.</p>
                    </div>
                    <form onSubmit={formSubmit} class="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" required ref={emailRef} placeholder="Email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" ref={passRef} required placeholder="Password" class="input input-bordered" />
                                <label class="label">
                                    <button onClick={resetPassword} class="label-text-alt link link-hover">Forgot password?</button>
                                </label>
                            </div>
                            {handleError}
                            <div class="form-control mt-6">
                                <button class="btn btn-accent text-white">Login</button>
                            </div>
                            <p className='text-danger italic'>New to Ceramic Tiles? <Link to="/register" className='text-primary no-underline' onClick={navigateRegister}>Please Register</Link> </p>
                            <div className="divider">OR</div>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-accent text-white"
                            >Continue with Google</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;