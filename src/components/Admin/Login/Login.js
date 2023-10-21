import "./Login.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "longhoang1@gmail.com",
      password: "123456",
    },
  ];

  const errors = {
    uname: "Invalid Username",
    pass: "Invalid Password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === username.value);

    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        setErrorMessages({ name: "password", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "username", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" name="username" />
        {renderErrorMessage("username")}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" />
        {renderErrorMessage("password")}
      </Form.Group>
      <Button type="submit" variant="primary w-100">
        Submit
      </Button>{" "}
    </form>
  );

  return (
    <section className="form">
      <h4 className="text-center mb-4">Login</h4>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </section>
  );
};

export default Login;
