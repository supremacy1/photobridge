"use client";
import { useEffect, useState } from 'react';
import styles from "../styles/dashboard.module.css";

import Footer from "../components/Footer.jsx";

function Dashboard() {
  const [fullname, setFullname] = useState('');

  useEffect(() => {
    const storedFullname = localStorage.getItem('fullname');
    if (storedFullname) {
      setFullname(storedFullname);
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1>Dashboard</h1>
        {fullname && <div className={styles.welcome}>Welcome, {fullname}!</div>}
        {/* Other dashboard content */}
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
