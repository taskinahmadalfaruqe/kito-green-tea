import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Longin = () => {
  const { handelLoginWithEmailPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    handelLoginWithEmailPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (userCredential) {
          const email = userCredential.user.email;
          fetch(`http://localhost:5000/adminCollection/${email}`)
            .then((res) => res.json())
            .then((data) => console.log(data));
          //   navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        const ErrorMassage = error.message;
        toast.error(`Something Went wrong with you. Error:${ErrorMassage}`, {
          position: "top-center",
          autoClose: 15000,
          theme: "colored",
        });
      });
  };

  return (
    <>
      <div className="hero log-in min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse rounded-2xl shadow-2xl border border-Primary_Color">
          <div className="card shrink-0 w-full max-w-sm  ">
            <form className="card-body" onSubmit={handleLogin}>
              <h2 className="text-3xl font-bold text-center text-Primary_Color">
                Login now!
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-Primary_Color">Email*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered  bg-White_Color border-Primary_Color"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-Primary_Color">Password*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered bg-White_Color border-Primary_Color"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary text-White_Color font-semibold bg-Primary_Color"
                >
                  Log In
                </button>
              </div>

              <div className="form-control">
                <p className="text-Yellow_Color">
                  <small>
                    New Here?{" "}
                    <Link to={"/admin/adminResister"}> Create an Account</Link>
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

export default Longin;
