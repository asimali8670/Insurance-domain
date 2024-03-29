import React, { useState, useRef, useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef = useRef("null");

  // This is a dummy api which will handle request for the login.
  const userLoginAPI = async () => {
    //crud using mock api.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "user" && password === "password") {
          resolve({ data: { success: true, message: "Login successful" } });
        } else {
          reject({ message: "Invalid credentials" });
        }
      }, 1000);
    });
  };

  const handleLogin = async () => {
    if (!username || !password) {
      toast.warning("Please enter both username and password");
      return;
    }

    if (password.length > 10) {
      toast.warning("Password cannot be more than 10 characters or numbers.");
    }

    try {
      const response = await userLoginAPI();

      toast.success("Login successful!", response.data);
      window.location.href = "/customerDashboard";
    } catch (error) {
      toast.error("Login failed, please try again!", error.message);
    }
  };

 
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <section className="container">
      <div className="loginPage">
        <h2>Login</h2>
        <br />
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>

        <div className="mt-3">
          <p>
            New User? <Link to="/SignUp">Sign Up Here</Link>
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <p className="para">
          We all want to ensure that our loved ones have a comfortable life and
          secured future. Choosing the best term life insurance plan is the
          first step towards providing a strong foundation of financial security
          for them. Tata AIA's Sampoorna Raksha Supreme is a comprehensive term
          life insurance plan that offers financial protection to your family
          and provides you with the flexibility to choose the plan that suits
          your needs. Insure today so that your loved ones can continue to lead
          the life of their dreams.
        </p>
      </div>
    </section>
  );
};

export default Login;
