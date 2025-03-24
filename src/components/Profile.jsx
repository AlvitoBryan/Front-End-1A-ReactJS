import React from 'react'
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/login");
  };
  return (
    <picture onClick={handleProfileClick} className='cursor-pointer'>
      <source media="(max-width: 640px)" srcSet="/src/assets/sidebar-btn.svg" />
      <img src="/src/assets/Avatar.png" className="max-w-none" alt="Profile" />
    </picture>
  )
}

export default Profile
