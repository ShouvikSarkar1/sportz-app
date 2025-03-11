import './App.css'
import TeamSelect from './components/TeamSelect/TeamSelect'
import TeamLogo from './components/TeamLogo/TeamLogo'
import WeekSelect from './components/WeekSelect/WeekSelect'
import { useState } from 'react'

function App() {
  const [team, setTeam] = useState(null);
  const [week, setWeek] = useState(null);

  return (
    <>
      <div className='TeamLogo'>
        <TeamLogo team={team} />
      </div>
      <div className='Select'>
        <TeamSelect onTeamSelect={setTeam}/>
        <WeekSelect onWeekSelect={setWeek}/>
      </div>
    </>
  )
}

export default App
