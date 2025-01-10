import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import registerLottie from "../assets/lottie/register.json";

import useAuth from "../hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-68px)]">
      <div className="lg:flex flex-row-reverse items-center gap-6">
        <div className="w-96">
          <Lottie animationData={registerLottie} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="font-bold text-4xl text-center pt-8">Register</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Register</button>
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
