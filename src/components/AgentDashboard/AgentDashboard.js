
import React, { useState, useEffect } from 'react';
import './agentDashboard.css';
import agentimg from '../../assets/agentimg.jpg'
import { useAppContext } from '../../context/AppContext';

const AgentDashboard = () => {
  const { state, dispatch } = useAppContext();
  const [customerPolicies, setCustomerPolicies] = useState([]);
  const [customerClaims, setCustomerClaims] = useState([]);
  const [newPolicyData, setNewPolicyData] = useState({
    customerName: '',
    policyName: '',
  });

  useEffect(() => {
    const fetchDummyData = () => {
      // Dummy data for customer policies
      const dummyCustomerPolicies = [
        { id: 1, name: 'Customer Policy 1' },
        { id: 2, name: 'Customer Policy 2' },
       
      ];

      // Dummy data for customer claims
      const dummyCustomerClaims = [
        { id: 1, description: 'Customer Claim 1 description' },
        { id: 2, description: 'Customer Claim 2 description' },
        
      ];

      setCustomerPolicies(dummyCustomerPolicies);
      setCustomerClaims(dummyCustomerClaims);
    };

    fetchDummyData();
  }, []);

  const handleCreatePolicy = () => {
    try {
      // Simulate creating a new policy using newPolicyData
      const newPolicy = {
        id: Math.random(),
        name: newPolicyData.policyName,
       
      };

      dispatch({ type: 'ADD_POLICY', payload: newPolicy });

      setCustomerPolicies((prevPolicies) => [...prevPolicies, newPolicy]);

      const newClaim = {
        id: Math.random(),
        description: `Claim for ${newPolicyData.customerName}`,
   
      };
      dispatch({ type: 'ADD_CLAIM', payload: newClaim });
      setCustomerClaims((prevClaims) => [...prevClaims, newClaim]);
    } catch (error) {
      // Handle error
      console.error('Error creating policy', error.message);
    }
  };

  return (
    <section className='container'>
    <img src={agentimg} alt="image" className="img3" />

    <div className='agentPage'>
      <h2>Agent Dashboard</h2>
      <section>
        <h3>Customer Policies</h3>
        {/* Display customer policies */}
        <ul>
          {customerPolicies.map((policy) => (
            <li key={policy.id}>{policy.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Customer Claims</h3>
        {/* Display customer claims */}
        <ul>
          {customerClaims.map((claim) => (
            <li key={claim.id}>{claim.description}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Create New Policy</h3>
        {/* Form for creating a new policy */}
        <label>Customer Name:</label>
        <input
          type="text"
          value={newPolicyData.customerName}
          onChange={(e) => setNewPolicyData({ ...newPolicyData, customerName: e.target.value })}
        />
        <label>Policy Name:</label>
        <input
          type="text"
          value={newPolicyData.policyName}
          onChange={(e) => setNewPolicyData({ ...newPolicyData, policyName: e.target.value })}
        />
     
        <button onClick={handleCreatePolicy}>Create Policy</button>
      </section>
    </div>
    </section>
  );
};

export default AgentDashboard;
