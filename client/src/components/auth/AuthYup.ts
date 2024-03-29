import * as yup from "yup";

const getAuthSchema = (formType: string) => {
  let schema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Can't be empty"),
    password: yup
      .string()
      .required("Please check again")
      .min(8, "Minimum 8 characters"),
    confirm: yup.string(),
  });

  if (formType === "signup") {
    schema = schema.shape({
      confirm: yup
        .string()
        .required("This is required")
        .oneOf([yup.ref("password"), ""], "Passwords must match"),
    });
  }

  return schema;
};

export default getAuthSchema;
