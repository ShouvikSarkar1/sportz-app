import './App.css'
import TeamSelect from './components/TeamSelect/TeamSelect'
import TeamLogo from './components/TeamLogo/TeamLogo'
import { useState } from 'react'
import axios from "axios";

function App() {
  const [team, setTeam] = useState(null)
  const [prediction, setPrediction] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/predict", {teamName: team});
      setPrediction(response.data.result);  

    } catch (error) {
      console.error("Error making prediction", error);
    }
  }

  return (
    <div>
      <h1>Select an NFL team</h1>
      <form onSubmit={handleSubmit}>
        <div className='TeamLogo'>
          <TeamLogo team={team} />
        </div>
        <div className='Select'>
          <TeamSelect onTeamSelect={setTeam}/>
        </div>
        <button type="submit">Predict</button>
      </form>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
}

export default App
