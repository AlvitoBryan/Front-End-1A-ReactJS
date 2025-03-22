import React from 'react'

const Profile = () => {
  return (
    <picture>
      <source media="(max-width: 640px)" srcSet="/src/assets/sidebar-btn.svg" />
      <img src="/src/assets/Avatar.png" className="max-w-none" alt="Profile" />
    </picture>
  )
}

export default Profile
