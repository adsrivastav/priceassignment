import React, { useState } from 'react';
import './pricing.css';

const Pricing = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'pricing-container dark-mode' : 'pricing-container'}>
            <div className="toggle-container">
                <button onClick={toggleDarkMode} className="toggle-button">
                    {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
            </div>
            <h1 className="pricing-header">Our Pricing</h1>
            <div className="pricing-cards">
                <div className="pricing-card">
                    <h2 className="plan-name">Basic Plan</h2>
                    <p className="plan-price">$10/month</p>
                    <ul className="plan-features">
                        <li>10 Projects</li>
                        <li>5 GB Storage</li>
                        <li>Email Support</li>
                    </ul>
                    <button className="plan-button">Sign Up</button>
                </div>
                <div className="pricing-card">
                    <h2 className="plan-name">Pro Plan</h2>
                    <p className="plan-price">$20/month</p>
                    <ul className="plan-features">
                        <li>50 Projects</li>
                        <li>50 GB Storage</li>
                        <li>Priority Support</li>
                    </ul>
                    <button className="plan-button">Sign Up</button>
                </div>
                <div className="pricing-card">
                    <h2 className="plan-name">Enterprise Plan</h2>
                    <p className="plan-price">$50/month</p>
                    <ul className="plan-features">
                        <li>Unlimited Projects</li>
                        <li>200 GB Storage</li>
                        <li>Dedicated Support</li>
                    </ul>
                    <button className="plan-button">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
