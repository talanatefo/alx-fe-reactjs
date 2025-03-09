//import { useFormik } from "formik";
import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const formik = useFormik({
  // initialValues: { name: "", email: "", password: "" },

  //  validationSchema: Yup.object({
  //   name: Yup.string(),
  //  email: Yup.string(),
  //  .email("Incorrect password or email"),
  //.required("Email is required"),
  //.password: Yup.string(),
  // }),
  // });

  function handleSubmit(e) {
    e.preventDefault();

    if (
      username === "talana" &&
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
      <button type="submit">Submit</button>
    </form>
  );
}
export default RegistrationForm;
