import React from 'react'
import { ProfileContext } from './ProfileContext'

const ProfileProvider = ({ children }) => {
  const [ selectedMenu, setSelectedMenu ] = React.useState(0)

  return (
    <ProfileContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider