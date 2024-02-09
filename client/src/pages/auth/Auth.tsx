// import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import API from "../../utils/API";
import mainLogo from "../../assets/logo-devlinks-large.svg";
import mail from "../../assets/icon-email.svg";
import passIcon from "../../assets/icon-password.svg";

const Auth = () => {
  // const [data, setData] = useState<{} | null>(null);
  const { handleSubmit, register } = useForm();
  const [formType, setFormType] = useState("signin");

  // useEffect(() => {
  //   const connectBackEnd = () => {
  //     try {
  //       const response = axios.get("http://localhost:3000/");
  //       setData(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   connectBackEnd();
  // }, []);

  const onSubmit = async () => {
    console.log("good");
    // const body = {
    //   email,password
    // }
    // const options = {headers:{"content-type": "application/json"}}
    const url = "/users";
    try {
      const res = await API.get(url);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="p-8 grow" onSubmit={handleSubmit(onSubmit)} noValidate>
      <img src={mainLogo} alt="main devlinks logo" />

      <div>
        <h2 className="text-2xl font-bold text-blackMedium mt-10 mb-3">
          {formType === "signin" ? "Login" : "Create account"}
        </h2>
        <p className="text-blackLight">
          {formType === "signin"
            ? "Add your details below to get back into the app"
            : "Let's get you started sharing your links!"}
        </p>
        <div className="flex flex-col gap-5">
          <div className="mt-10">
            <label className="text-blackMedium text-xs" htmlFor="">
              Email address
            </label>
            <div className="flex items-center gap-3 bg-white border-[1px] border-greyLight rounded-lg p-3 mt-1">
              <img src={mail} alt="mail icon" />
              <input
                {...register("email", { required: true })}
                className="w-full outline-none"
                type="email"
                placeholder="e.g. alex@email.com"
              />
            </div>
          </div>
          <div>
            <label className="text-blackMedium text-xs" htmlFor="">
              {formType === "signin" ? "Password" : "create password"}{" "}
            </label>
            <div className="flex items-center gap-3 bg-white border-[1px] border-greyLight rounded-lg p-3 mt-1">
              <img src={passIcon} alt="password icon" />
              <input
                {...register("password", { required: true })}
                className="w-full outline-none"
                type="password"
                placeholder={
                  formType === "signin"
                    ? "Enter your password"
                    : "At least .8 characters"
                }
              />
            </div>
          </div>
          {formType === "signup" && (
            <div>
              <label className="text-blackMedium text-xs" htmlFor="">
                confirm password
              </label>
              <div className="flex items-center gap-3 bg-white border-[1px] border-greyLight rounded-lg p-3 mt-1">
                <img src={passIcon} alt="password icon" />
                <input
                  {...register("confirm", { required: true })}
                  className="w-full outline-none"
                  type="password"
                  placeholder="At least .8 characters"
                />
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
        <div className="text-center mt-4 flex flex-col gap-1">
          <p className="text-blackLight">
            {formType === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <button
            onClick={() =>
              setFormType(formType === "signin" ? "signup" : "signin")
            }
            className="text-purple"
          >
            {formType === "signin" ? "Create account" : "Login"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Auth;
