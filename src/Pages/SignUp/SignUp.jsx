// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { handelCreateUserWithEmailPassword, handelUpdateUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handelRegisterAdmin = (data) => {
    const { email, name, password, photoURL } = data;
    handelCreateUserWithEmailPassword(email, password)
      .then((res) => {
        handelUpdateUser(name, photoURL);
        const userData = { email: email, adminStatus: "user" };
        fetch("http://localhost:5000/adminCollection", {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((resA) => resA.json())
          .then((dataA) => console.log(dataA));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="hero log-in min-h-screen ">
        <div className="hero-content   shadow-2xl">
          <div className="card shrink-0 w-full max-w-sm  ">
            <form
              onSubmit={handleSubmit(handelRegisterAdmin)}
              className="card-body"
            >
              <h2 className="text-5xl font-bold text-center text-black">
                SignUp now!
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">
                    Photo URL field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered "
                />
                {errors.email && (
                  <span className="text-red-600">Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[@#$!%^&*()_+])[A-Za-z\d@#$!%^&*()_+]{6,}$/i,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered "
                />
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    More than 6 digit with capital latter & special character
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary text-white font-semibold"
                  value="Sign Up"
                />
              </div>
              <div className="form-control">
                <p className="text-Yellow_Color">
                  <small>
                    Already registered?{" "}
                    <Link to="/admin/adminLogin"> Go to log in</Link>
                  </small>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default SignUp;
