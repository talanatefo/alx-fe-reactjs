import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },

    validationSchema: Yup.object({
      name: Yup.string(),
      
      email: Yup.string(),
       .email("Incorrect email")
      .required("Email is required")

      .password: Yup.string(),
      .required("password is required")
    }),
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (
      username.length > 2 &&
      email === "tefo@gmail.com" &&
      password === "1234"
    ) {
      localStorage.setItem("authenticated", "true");
    } else {
      setEmail("Invalid password or email");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
      <label htmlFor="username">Enter your name</label>
      <input
        type="text"
        name="username"
        className="current-name"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label htmlFor="name">Enter your email</label>
      <input
        type="email"
        name="email"
        className="current-email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="password">Enter password</label>
      <input
        type="password"
        name="password"
        className="current-password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <span>{error}</span>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormikForm;
