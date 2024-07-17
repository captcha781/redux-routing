import React, { useState } from "react";
import { signin } from "../services/auth.service";
import { useDispatch } from "react-redux";
import { setupAuth } from "../redux/slices/auth.slice";
import { setupUser } from "../redux/slices/user.slice";

const Login = () => {
  const dispatch = useDispatch()
  const [values, setValues] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await signin(values);
      
      if (response.message) {
        setError(response.message)
      } else {
        dispatch(setupAuth({ isAuth: true, id: response.id, token: response.token }))
        dispatch(setupUser(response))
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto py-5">
      <div className="mb-3 w-25 mx-auto d-flex flex-column">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3 w-25 mx-auto d-flex flex-column">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3 w-25 mx-auto d-flex flex-column">
        <button className="btn btn-primary" onClick={handleSubmit}>
          {loading ? "Loading..." : "Login"}
        </button>
      </div>
      <div className="mb-3 w-25 mx-auto d-flex flex-column">
        {error}
      </div>
    </main>
  );
};

export default Login;
