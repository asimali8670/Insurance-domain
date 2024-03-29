import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import CustomerDashboard from "./components/CustomerDashboard/CustomerDashboard";
import AgentDashboard from "./components/AgentDashboard/AgentDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import CreateForm from "./components/AdminDashboard/CreateForm";
import CreateList from "./components/CreateList";

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>

        <Route path="/" element={<Intro />} />
        <Route path="Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="CustomerDashboard" element={<CustomerDashboard />} />
        <Route path="AgentDashboard" element={<AgentDashboard />} />
        <Route path="CreateForm" element={<CreateForm />} />
        <Route path="AdminDashboard" element={<AdminDashboard />} />
        <Route path="CreateList" element={<CreateList />} />

      </Routes>
    </div>
  );
}

export default App;
