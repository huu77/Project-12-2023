import * as yup from "yup";

 
const schema = yup.object({
    username: yup
    .string()
    .required("Username is requierd")
    .min(10, "Username must be at least 10 characters long"),
    password: yup
    .string()
    .required("Password is requierd")
    .min(10, "Password must be at least 10 characters long")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/,
      "Invalid password format"
    ),
    confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
    email: yup
    .string()
    .required("Email is required")
    .matches(/\S+@\S+\.\S+/, "Invalid email address"),
    fullname: yup
    .string()
    .required("Fullname is required")
    .min(3, "Fullname must be at least 3 characters long"),
});

export type Register = yup.InferType<typeof schema>;
export default schema