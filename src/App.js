import React from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";


function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <h1> <b>FinCheck</b></h1>
        </div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Invest</li>
            <li>Transactions</li>
            <li>Cards</li>
            <li>Statistics</li>
          </ul>
        </nav>
        <div className="settings">
          <p>Settings</p>
          <p>Log-out</p>
      </div>
      </aside>
      <main className="content">
        <header className="header">
          <div className="welcome">
            <p><b>Hi Adaline Horton, Welcome back!</b></p>
          </div>
          <div className="date-search">
            <span className="date">Jul 20, 2024</span>
            <input type="text" placeholder="Type to search" />
          </div>
          <div className="profile">

            <span>Adaline Horton</span>
          </div>
        </header>
        <section className="dashboard-content">
          <Dashboard/>
        </section>
      </main>
    </div>
  );
}

export default App;