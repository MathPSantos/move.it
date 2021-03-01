import { useContext } from 'react'

import styles from '@/styles/components/ExperienceBar.module.css'

import { ChallengesContext } from '@/contexts/ChallangesContext'

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
  
  const percentageToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>

      <div>
        <div style={{ width: `${percentageToNextLevel}%` }} />

        <span className={styles.currentExperience} style={{ left: `${percentageToNextLevel}%` }}>
          {currentExperience} px
        </span>
      </div>

      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}

export default ExperienceBar
