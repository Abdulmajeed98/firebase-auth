import React from "react";
import { Container } from "react-bootstrap";
import SignUp from "./components/signup/SignUp";
import { AuthProvider } from "./context/authContext";

const App = () => {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "25rem" }}>
          <SignUp />
        </div>
      </Container>
    </AuthProvider>
  );
};

export default App;
