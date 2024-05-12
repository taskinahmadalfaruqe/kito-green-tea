// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Longin = () => {
    return (
        <> 
            <div className="hero log-in min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl">

                    <div className="card shrink-0 w-full max-w-sm  ">
                        <form  className="card-body">
                            <h2 className='text-5xl font-bold text-center text-black'>Login now!</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered bg-white" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary text-white font-semibold bg-Primary_Color" value="Login" />
                            </div>
                            
                            <div className="form-control">
                                <p className='text-Yellow_Color'><small>New Here? <Link to={'/signup'}> Create an Acount</Link></small></p>
                            </div>
                        </form>
                     
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Longin;