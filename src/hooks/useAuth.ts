import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver as resolver } from "@hookform/resolvers/yup";
import getAuthSchema from "../components/auth/AuthYup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../firebase/firebase";

const useAuth = () => {
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

  const notify = (message: string) => toast(message);

  const signInWithEmailAndPasswordHandler = async (
    email: string,
    password: string
  ) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation("/addLinks");
    } catch (firebaseError) {
      if (
        firebaseError instanceof FirebaseError &&
        firebaseError.code === "auth/invalid-credential"
      ) {
        console.log("auth error: " + firebaseError);

        notify("User not found");
      } else {
        console.error("Unexpected error during authentication:", firebaseError);
      }
    }
  };

  const signUpWithEmailAndPasswordHandler = async (
    email: string,
    password: string
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation("/addLinks");
    } catch (error) {
      console.log("Error from SignUp:", error);
    }
  };

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await trigger();
      if (Object.keys(errors).length === 0) {
        console.log("Form submitted successfully");

        formType === "signin"
          ? await signInWithEmailAndPasswordHandler(email, password)
          : await signUpWithEmailAndPasswordHandler(email, password);
        // navigation("/addLinks");
      } else {
        console.log("Form contains errors, please fix them before submitting");
      }
    } catch (error) {
      console.log("onsubmit error", error);
    }
  };
  return {
    setFormType,
    handleSubmit,
    register,
    reset,
    onSubmit,
    formType,
    errors,
  };
};

export default useAuth;
