import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const HeroSection = () => {
  return (
    <div>
        <Typewriter
        words={['Développeur Web', 'Passionné par React', 'Créateur de solutions web']}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  )
}

export default HeroSection