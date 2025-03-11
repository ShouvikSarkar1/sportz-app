function TeamSelect({ onTeamSelect }) {
    const teams = [
        "Arizona Cardinals",
        "Atlanta Falcons",
        "Carolina Panthers",
        "Chicago Bears",
        "Dallas Cowboys",
        "Detroit Lions",
        "Green Bay Packers",
        "Los Angeles Rams",
        "Minnesota Vikings",
        "New Orleans Saints",
        "New York Giants",
        "Philadelphia Eagles",
        "San Francisco 49ers",
        "Seattle Seahawks",
        "Tampa Bay Buccaneers",
        "Washington Commanders",
        "Baltimore Ravens",
        "Buffalo Bills",
        "Cincinnati Bengals",
        "Cleveland Browns",
        "Denver Broncos",
        "Houston Texans",
        "Indianapolis Colts",
        "Jacksonville Jaguars",
        "Kansas City Chiefs",
        "Las Vegas Raiders",
        "Los Angeles Chargers",
        "Miami Dolphins",
        "New England Patriots",
        "New York Jets",
        "Pittsburgh Steelers",
        "Tennessee Titans"
    ];

    return (
        <select onChange={(e) => onTeamSelect(e.target.value)}>
          <option value="">Select a team</option>
          {teams.map((team) => (
            <option key={team} value={team}>{team}</option>
          ))}
        </select>
    );
  }
  
  export default TeamSelect;
