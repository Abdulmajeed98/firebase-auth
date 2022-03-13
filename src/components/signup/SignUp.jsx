import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/authContext";
const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp, currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPassRef.current.value) {
      return setErrors("Password do not match!");
    }

    try {
      setErrors("");
      setLoading(true);
      signUp(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setErrors(error.toString());
    }
    setLoading(false);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {errors && <Alert variant="danger">{errors}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.FloatingLabel
              controlId="email"
              label="Email"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                ref={emailRef}
              />
            </Form.FloatingLabel>
            <Form.FloatingLabel
              controlId="password"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </Form.FloatingLabel>

            <Form.FloatingLabel
              controlId="confirmPassword"
              label="Password Confirmation"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                ref={confirmPassRef}
              />
            </Form.FloatingLabel>
            <Button disabled={loading} type="submit" className="w-100">
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Login
      </div>
    </>
  );
};

export default SignUp;
