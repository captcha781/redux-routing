import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  return (
    <main className="container mx-auto py-5">
      <div className="d-flex justify-content-center w-100">
        <button className="mx-2" onClick={() => navigate('/login')}>Go To Login</button>
        <button className="mx-2" onClick={() => navigate('/dashboard')}>Go To Dashboard</button>
        <button className="mx-2" onClick={() => navigate('/profile')}>Go To Profile</button>
      </div>
    </main>
  );
};

export default Home;
