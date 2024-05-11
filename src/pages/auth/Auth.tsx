import { useState } from "react";
import { useForm } from "react-hook-form";
import mainLogo from "../../assets/logo-devlinks-large.svg";
import mail from "../../assets/icon-email.svg";
import passIcon from "../../assets/icon-password.svg";
import { yupResolver as resolver } from "@hookform/resolvers/yup";
import getAuthSchema from "../../components/auth/AuthYup";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Auth = () => {
  const [formType, setFormType] = useState("signin");
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    resolver: resolver(getAuthSchema(formType)),
  });
  const navigation = useNavigate();

  const signInWithEmailAndPasswordHandler = async (
    email: string,
    password: string
  ) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Error from sign in", error);
    }
  };

  const signUpWithEmailAndPasswordHandler = async (
    email: string,
    password: string
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Error from SignUp:", error);
    }
  };

  const onSubmit = async (formData: { email: string; password: string }) => {
    try {
      await trigger();
      if (Object.keys(errors).length === 0) {
        console.log("Form submitted successfully");

        const { email, password } = formData;
        console.log("email: " + email, "password", password);

        formType === "signin"
          ? await signInWithEmailAndPasswordHandler(email, password)
          : await signUpWithEmailAndPasswordHandler(email, password);
        navigation("/addLinks");
      } else {
        console.log("Form contains errors, please fix them before submitting");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="p-8 grow max-w-[476px]"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <img className="md:mx-auto" src={mainLogo} alt="main devlinks logo" />

        <div className="mt-10 md:mt-20">
          <h2 className="text-2xl font-bold text-blackMedium mb-3 md:text-[32px]">
            {formType === "signin" ? "Login" : "Create account"}
          </h2>
          <p className="text-blackLight">
            {formType === "signin"
              ? "Add your details below to get back into the app"
              : "Let's get you started sharing your links!"}
          </p>
          <div className="flex flex-col gap-5">
            <div className="mt-10">
              <label
                className={` ${
                  errors.email ? "text-red" : "text-blackMedium"
                } text-xs`}
                htmlFor="email"
              >
                Email address
              </label>
              <div
                className={`flex items-center justify-between gap-3 bg-white border-[1px] ${
                  errors.email ? "border-red" : "border-greyLight"
                }  rounded-lg p-3 mt-1`}
              >
                <div className="flex gap-2">
                  <img src={mail} alt="mail icon" />
                  <input
                    {...register("email")}
                    className="w-full outline-none"
                    type="email"
                    placeholder="e.g. alex@email.com"
                    id="email"
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div>
              <label
                className={`text-xs ${
                  errors.password ? "text-red" : "text-blackMedium"
                }`}
                htmlFor="password"
              >
                {formType === "signin" ? "Password" : "create password"}{" "}
              </label>
              <div
                className={`flex items-center justify-between gap-3 bg-white border-[1px] ${
                  errors.password ? "border-red" : "border-greyLight"
                } rounded-lg p-3 mt-1`}
              >
                <div className="flex gap-2">
                  <img src={passIcon} alt="password icon" />
                  <input
                    {...register("password")}
                    className="w-full outline-none"
                    type="password"
                    placeholder={
                      formType === "signin"
                        ? "Enter your password"
                        : "At least .8 characters"
                    }
                    id="password"
                  />
                </div>
                {errors.password && (
                  <p className="text-xs text-red">{errors.password.message}</p>
                )}
              </div>
            </div>
            {formType === "signup" && (
              <div>
                <label
                  className={` ${
                    errors.confirm ? "text-red" : "text-blackMedium"
                  } text-xs`}
                  htmlFor="confirm"
                >
                  confirm password
                </label>
                <div
                  className={`flex items-center justify-between gap-3 bg-white border-[1px] ${
                    errors.confirm ? "border-red" : "border-greyLight"
                  } rounded-lg p-3 mt-1`}
                >
                  <div className="flex gap-2">
                    <img src={passIcon} alt="password icon" />
                    <input
                      {...register("confirm")}
                      className="w-full outline-none"
                      type="password"
                      placeholder="At least .8 characters"
                      id="confirm"
                    />
                  </div>
                  {errors.confirm && (
                    <p className="text-xs text-red">{errors.confirm.message}</p>
                  )}
                </div>
                <p className="text-blackLight text-xs mt-7">
                  Password must contain at least 8 characters
                </p>
              </div>
            )}
            <button
              className="bg-purple p-3 font-semibold text-white mt-3 rounded-lg"
              type="submit"
            >
              {formType === "signin" ? "Login" : "Create new account"}
            </button>
          </div>
          <div className="text-center mt-4 flex flex-col gap-1 md:flex-row md:justify-center">
            <p className="text-blackLight">
              {formType === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <button
              onClick={() => {
                setFormType(formType === "signin" ? "signup" : "signin");
                reset();
              }}
              className="text-purple"
            >
              {formType === "signin" ? "Create account" : "Login"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
