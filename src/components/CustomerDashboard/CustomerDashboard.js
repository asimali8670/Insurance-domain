
import React, { useState, useEffect } from 'react';
import './customerDashboard.css';
import customer from '../../assets/customer.jpg'
import { useAppContext } from '../../context/AppContext';

const CustomerDashboard = () => {
  const { state } = useAppContext();
  const [policies, setPolicies] = useState([]);
  const [claims, setClaims] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    const fetchDummyData = () => {
      // Dummy data for policies
      const dummyPolicies = [
        { id: 1, name: 'Policy 1' },
        { id: 2, name: 'Policy 2' },
      ];

      // Dummy data for claims
      const dummyClaims = [
        { id: 1, description: 'Claim 1 description' },
        { id: 2, description: 'Claim 2 description' },
      ];

      // Dummy data for payment history
      const dummyPaymentHistory = [
        { id: 1, amount: 100 },
        { id: 2, amount: 150 },
      ];

      setPolicies(dummyPolicies);
      setClaims(dummyClaims);
      setPaymentHistory(dummyPaymentHistory);
    };

    fetchDummyData();
  }, []);

  return (
    <section className='container'>
    <img src={customer} alt="image" className="img" />
    <div className='customerPage'>
      <h2>Customer Dashboard</h2>
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
      <section>
        <h3>Payment History</h3>
        {/* Display payment history */}
        <ul>
          {paymentHistory.map((payment) => (
            <li key={payment.id}>{payment.amount}</li>
          ))}
        </ul>
      </section>
    </div>
    </section>
  );
};

export default CustomerDashboard;

