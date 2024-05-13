// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="hero log-in min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse rounded-2xl shadow-2xl border border-Primary_Color">

                    <div className="card shrink-0 w-full max-w-sm ">
                        <form className="card-body">
                            <h2 className='text-3xl font-bold text-center text-Primary_Color'>Login now!</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-Primary_Color">Email*</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered bg-White_Color border-Primary_Color"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-Primary_Color">Password*</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered bg-White_Color border-Primary_Color"
                                    required />

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary text-White_Color font-semibold bg-Primary_Color" value="Login" />
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

export default Login;