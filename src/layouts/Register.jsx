import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import registerLottie from "../assets/lottie/register.json";

import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;
    const updateInfo = { displayName: name, photoURL: photoURL };
    if (password.length < 6) {
      return toast.error("Length must be at least 6 character ");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Must have an Uppercase letter in the password");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Must have a Lowercase letter in the password");
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Registration Successful");
        updateUser(updateInfo)
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.code);
          });
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-68px)]">
      <Toaster />
      <div className="lg:flex flex-row-reverse items-center gap-6">
        <div className="w-96">
          <Lottie animationData={registerLottie} />
        </div>
        <div className="card bg-orange-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="font-bold text-4xl text-center pt-8 text-primary ">
            Register
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Your Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-primary text-white">Register</button>
            </div>
          </form>
          <p className="pl-8 pb-8">
            Already have an account?{" "}
            <Link to={"/login"} className="font-bold text-blue-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
