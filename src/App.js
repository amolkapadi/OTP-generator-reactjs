import React, { useState } from 'react';
import './App.css';

function App() {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  // Function to generate a random OTP of given length
  const generateOTP = (length) => {
    let otp = '';
    const characters = '0123456789';
    for (let i = 0; i < length; i++) {
      otp += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return otp;
  };

  const handleGenerateOtp = () => {
    const generatedOtp = generateOTP(6); // Generate a 6-digit OTP
    setOtp(generatedOtp);
    setMessage('Your OTP is generated!');
  };

  return (
    <div className="container">
      <h1>OTP Generator</h1>
      <div className="otp-box">
        <input
          type="text"
          value={otp}
          disabled
          placeholder="OTP will appear here"
          className="otp-display"
        />
        <button onClick={handleGenerateOtp} className="generate-btn">
          Generate OTP
        </button>
        <p className="otp-message">{message}</p>
      </div>
    </div>
  );
}

export default App;
