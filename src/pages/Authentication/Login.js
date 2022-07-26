import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { Link } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [
    signInWithEmailAndPassword,
    emailLoginUser,
    emailLoginLoading,
    emailLoginError,
  ] = useSignInWithEmailAndPassword(auth);

  const [
    signInWithGoogle,
    googleLoginUser,
    googleLoginLoading,
    googleLoginError,
  ] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [token] = useToken(emailLoginUser || googleLoginUser);
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      localStorage.setItem("accessToken", token);
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (emailLoginLoading || googleLoginLoading) {
    return <LoadingSpinner />;
  }

  // if (emailLoginUser || googleLoginUser) {
  //   navigate(from, { replace: true });
  // }

  let errorP;
  if (emailLoginError || googleLoginError) {
    errorP = <>{emailLoginError?.message || googleLoginError?.message}</>;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold my-8">Login</h1>
      <form className="w-3/6 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs mx-auto mb-2 ">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid Email", // JS only: <p>error message</p> TS only support string
              },
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label>
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors?.email?.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors?.email?.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs mx-auto mb-2 ">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Password should be minimum 6 chacharacters long",
              },
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label>
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors?.password?.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors?.password?.message}
              </span>
            )}
          </label>
        </div>
        <p className="text-red-500 text-center">
          <small>{errorP}</small>
        </p>
        <div className="form-control w-full max-w-xs mx-auto mb-2 ">
          <input
            type="submit"
            defaultValue="Login"
            readOnly
            className="input input-bordered w-full max-w-xs bg-accent text-white font-semibold cursor-pointer"
          />
        </div>
      </form>
      <p className="w-full max-w-xs mx-auto">
        New to Doctors Portal?{" "}
        <Link to="/signup" className="text-blue-400">
          Create New Account
        </Link>
      </p>
      <div className="w-full max-w-xs flex flex-col items-center mx-auto">
        <div className="divider">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn bg-white text-black uppercase text-center"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
