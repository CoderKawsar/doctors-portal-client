import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import GoogleSignIn from "./GoogleSignIn";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, createError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const [token] = useToken(user || gUser);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (loading || updating) {
    return <LoadingSpinner />;
  }

  if (token) {
    navigate("/appointment");
  }

  let errorP;
  if (createError || updateError) {
    errorP = <>{createError?.message || updateError?.message}</>;
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast("User created");
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold my-8">Sign Up</h1>
      <form className="w-3/6 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs mx-auto mb-2 ">
          <label className="label">
            <span className="label-text font-semibold">Your Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
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
          </label>
        </div>
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
            className="mt-2 input input-bordered w-full max-w-xs bg-accent text-white font-semibold cursor-pointer"
          />
        </div>
      </form>
      <p className="w-full max-w-xs mx-auto">
        Already an user?
        <Link to="/signup" className="text-blue-400">
          Login
        </Link>{" "}
        here
      </p>
      <GoogleSignIn signInWithGoogle={signInWithGoogle} />
    </div>
  );
};

export default Signup;
