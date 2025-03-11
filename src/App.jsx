import './App.css'
import TeamSelect from './components/TeamSelect/TeamSelect'
import TeamLogo from './components/TeamLogo/TeamLogo'
import { useState } from 'react'

function App() {
  const [team, setTeam] = useState(null)

  return (
    <>
      <div className='TeamLogo'>
        <TeamLogo team={team} />
      </div>
      <div className='Select'>
        <TeamSelect onTeamSelect={setTeam}/>
      </div>
    </>
  )
}

export default App
