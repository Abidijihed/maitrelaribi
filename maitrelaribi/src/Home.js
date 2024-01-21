import React from 'react'
import Flags from './services/Services.js'
import Presentation from './components/Presentation.js'
import SocialMediaIcons from './components/SocialMediaIcons.js';
import Maps from './components/Maps.js'

export default function Home() {
  return (
    <div>
      <SocialMediaIcons />
      <Presentation />
      <Flags />
      <Maps />
    </div>
  )
}
