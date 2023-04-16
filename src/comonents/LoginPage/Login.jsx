import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div className="border-2">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/3">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-8">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <span className="text-center">
                New to Ema-john? {" "}
                <Link className="btn-link" to={"/signin"}>
                Create New Account
                </Link>
              </span>
            </form>
            <span className=" w-5/6 mx-auto mb-5 flex justify-center items-center gap-4">
              {" "}
              <hr className="w-1/2 inline-block" />{" "}
              <p className="text-2xl">or</p>{" "}
              <hr className="inline-block w-1/2" />
            </span>
            <div className="flex items-center gap-5  justify-center w-5/6 border py-2 rounded-xl mx-auto">
              <img
                className="w-1/12"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"
                alt=""
              />
              <span className="text-xl">Continue with google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
