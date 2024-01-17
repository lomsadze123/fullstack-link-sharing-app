import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import API from "../../utils/API";

const Auth = () => {
  const [data, setData] = useState();
  const { handleSubmit, register } = useForm();

  useEffect(() => {
    const connectBackEnd = () => {
      try {
        const response = axios.get("http://localhost:3000/");
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    connectBackEnd();
  }, []);

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
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label htmlFor="">email</label> <br />
        <input
          {...register("email", { required: true })}
          className="border-2 border-purple"
          type="email"
        />
      </div>
      <div>
        <label htmlFor="">create password</label> <br />
        <input
          {...register("create", { required: true })}
          className="border-2 border-purple"
          type="password"
        />
      </div>
      <div>
        <label htmlFor="">confirm password</label> <br />
        <input
          {...register("confirm", { required: true })}
          className="border-2 border-purple"
          type="password"
        />
      </div>
      <button className="bg-purple p-2 text-white mt-3" type="submit">
        sign up
      </button>
    </form>
  );
};

export default Auth;
