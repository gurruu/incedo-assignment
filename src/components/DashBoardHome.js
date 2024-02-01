import React from 'react';
import { useNavigate } from 'react-router-dom';

function DashBoardHome(){
    const navigate = useNavigate();

    const handleButtonClick = () => {
      // Programmatic navigation to another route
      navigate('/dashboard/profile');
    };
    return (
        <div>
        <p>Dashboard Home Page</p>
        <button onClick={handleButtonClick}>Go to Dashboard Profile</button>
      </div>
    )
}
export default DashBoardHome


