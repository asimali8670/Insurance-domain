import React, { useState, useEffect } from "react";
import "./adminDashboard.css";
import adminimg from "../../assets/adminimg.webp";
import CreateForm from "./CreateForm";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [policies, setPolicies] = useState([]);
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const fetchDummyData = () => {
      // Dummy data for users
      const dummyUsers = [
        { id: 1, username: "Smith Jones" },
        { id: 2, username: "Jessica Rone" },
        { id: 3, username: "Melissa Frank" },
        { id: 4, username: "Jason Decker" },
        // Add more users as needed
      ];

      // Dummy data for policies
      const dummyPolicies = [
        { id: 1, name: "Policy 1" },
        { id: 2, name: "Policy 2" },
        { id: 3, name: "Policy 3" },
        { id: 4, name: "Policy 4" },
        // Add more policies as needed
      ];

      // Dummy data for claims
      const dummyClaims = [
        { id: 1, description: "Claim 1 description" },
        { id: 2, description: "Claim 2 description" },
        { id: 3, description: "Claim 3 description" },
        { id: 4, description: "Claim 4 description" },
        // Add more claims as needed
      ];

      setUsers(dummyUsers);
      setPolicies(dummyPolicies);
      setClaims(dummyClaims);
    };

    fetchDummyData();
  }, []);

  const handleCreate = ({ type, value }) => {
    const newItem = {
      user: () =>
        setUsers([...users, { id: users.length + 1, username: value }]),
      policy: () =>
        setPolicies([...policies, { id: policies.length + 1, name: value }]),
      claim: () =>
        setClaims([...claims, { id: claims.length + 1, description: value }]),
    }[type];

    if (newItem) {
      newItem();
    }
  };

  return (
    <section className="container">
      <img src={adminimg} alt="image" className="img4" />

      <div className="adminPage">
        <h2>Administrator Dashboard</h2>

        <section>
          <h3>Users</h3>
          {/* Display users */}
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Policies</h3>
          {/* Display policies */}
          <ul>
            {policies.map((policy) => (
              <li key={policy.id}>{policy.name}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Claims</h3>
          {/* Display claims */}
          <ul>
            {claims.map((claim) => (
              <li key={claim.id}>{claim.description}</li>
            ))}
          </ul>
        </section>
        <CreateForm onCreate={handleCreate} />
      </div>
    </section>
  );
};

export default AdminDashboard;
