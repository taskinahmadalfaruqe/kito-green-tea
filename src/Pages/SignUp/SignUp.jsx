// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>


            <div className="hero log-in min-h-screen ">
                <div className="hero-content shadow-2xl rounded-2xl border border-Primary_Color">

                    <div className="card w-full">
                        <form onSubmit={handleSubmit()} className="card-body">
                            <h2 className='text-3xl font-bold text-center text-Primary_Color'>SignUp now!</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-Primary_Color">Photo URL*</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })}
                                    placeholder="Photo URL"
                                    className="input input-bordered border-Primary_Color w-full" />
                                {errors.photoURL && <span className="text-red-600">Photo URL field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-Primary_Color">Name*</span>
                                </label>
                                <input type="text" {...register("name", { required: true })}
                                    name='name'
                                    placeholder="Name"
                                    className="input input-bordered border-Primary_Color w-full" />
                                {errors.name && <span className="text-red-600">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-Primary_Color">Email*</span>
                                </label>
                                <input type="email" {...register("email", { required: true })}
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered border-Primary_Color w-full" />
                                {errors.email && <span className="text-red-600">Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-Primary_Color">Password*</span>
                                </label>
                                <input type="password"
                                    {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*[@#$!%^&*()_+])[A-Za-z\d@#$!%^&*()_+]{6,}$/i })} name="password" placeholder="password"
                                    className="input input-bordered border-Primary_Color w-full" />
                                {errors.password?.type === 'pattern' && <p className="text-red-500">More than 6 digit with capital latter & special character</p>}
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit"
                                    className="btn btn-primary text-White_Color font-semibold bg-Primary_Color"
                                    value="Sign Up" />
                            </div>
                            <div className="form-control">
                                <p className='text-Yellow_Color'><small>Already registered? <Link to='/login'>  Go to log in</Link></small></p>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </>
    );
};

export default SignUp;