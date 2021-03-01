import { useContext } from 'react'

import styles from '@/styles/components/Profile.module.css'

import { ChallengesContext } from '@/contexts/ChallangesContext'

const Profile = () => {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/MathPSantos.png" alt="" />
      <div>
        <strong>Matheus Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />  
          Level {level}
        </p>
      </div>
    </div>
  )
}

export default Profile