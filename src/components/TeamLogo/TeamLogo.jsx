import React from 'react';


const teamLogos = {
    "Baltimore Ravens": "https://upload.wikimedia.org/wikipedia/en/1/16/Baltimore_Ravens_logo.svg",
    "Buffalo Bills": "https://upload.wikimedia.org/wikipedia/en/7/77/Buffalo_Bills_logo.svg",
    "Cincinnati Bengals": "https://upload.wikimedia.org/wikipedia/commons/8/81/Cincinnati_Bengals_logo.svg",
    "Cleveland Browns": "https://upload.wikimedia.org/wikipedia/en/d/d9/Cleveland_Browns_logo.svg",
    "Denver Broncos": "https://upload.wikimedia.org/wikipedia/en/4/44/Denver_Broncos_logo.svg",
    "Houston Texans": "https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Texans_logo.svg",
    "Indianapolis Colts": "https://upload.wikimedia.org/wikipedia/commons/0/00/Indianapolis_Colts_logo.svg",
    "Jacksonville Jaguars": "https://upload.wikimedia.org/wikipedia/en/7/74/Jacksonville_Jaguars_logo.svg",
    "Kansas City Chiefs": "https://upload.wikimedia.org/wikipedia/en/e/e1/Kansas_City_Chiefs_logo.svg",
    "Las Vegas Raiders": "https://upload.wikimedia.org/wikipedia/en/4/48/Las_Vegas_Raiders_logo.svg",
    "Los Angeles Chargers": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Los_Angeles_Chargers_logo.svg",
    "Miami Dolphins": "https://upload.wikimedia.org/wikipedia/en/3/37/Miami_Dolphins_logo.svg",
    "New England Patriots": "https://upload.wikimedia.org/wikipedia/en/b/b9/New_England_Patriots_logo.svg",
    "New York Jets": "https://upload.wikimedia.org/wikipedia/en/6/6b/New_York_Jets_logo.svg",
    "Pittsburgh Steelers": "https://upload.wikimedia.org/wikipedia/commons/d/de/Pittsburgh_Steelers_logo.svg",
    "Tennessee Titans": "https://upload.wikimedia.org/wikipedia/en/c/c1/Tennessee_Titans_logo.svg",
    "Arizona Cardinals": "https://upload.wikimedia.org/wikipedia/en/7/72/Arizona_Cardinals_logo.svg",
    "Atlanta Falcons": "https://upload.wikimedia.org/wikipedia/en/c/c5/Atlanta_Falcons_logo.svg",
    "Carolina Panthers": "https://upload.wikimedia.org/wikipedia/en/1/1c/Carolina_Panthers_logo.svg",
    "Chicago Bears": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Chicago_Bears_logo.svg",
    "Dallas Cowboys": "https://upload.wikimedia.org/wikipedia/commons/1/15/Dallas_Cowboys.svg",
    "Detroit Lions": "https://upload.wikimedia.org/wikipedia/en/7/71/Detroit_Lions_logo.svg",
    "Green Bay Packers": "https://upload.wikimedia.org/wikipedia/commons/5/50/Green_Bay_Packers_logo.svg",
    "Los Angeles Rams": "https://upload.wikimedia.org/wikipedia/en/8/8a/Los_Angeles_Rams_logo.svg",
    "Minnesota Vikings": "https://upload.wikimedia.org/wikipedia/en/4/48/Minnesota_Vikings_logo.svg",
    "New Orleans Saints": "https://upload.wikimedia.org/wikipedia/commons/5/50/New_Orleans_Saints_logo.svg",
    "New York Giants": "https://upload.wikimedia.org/wikipedia/commons/6/60/New_York_Giants_logo.svg",
    "Philadelphia Eagles": "https://upload.wikimedia.org/wikipedia/en/8/8e/Philadelphia_Eagles_logo.svg",
    "San Francisco 49ers": "https://upload.wikimedia.org/wikipedia/commons/3/3a/San_Francisco_49ers_logo.svg",
    "Seattle Seahawks": "https://upload.wikimedia.org/wikipedia/en/8/8e/Seattle_Seahawks_logo.svg",
    "Tampa Bay Buccaneers": "https://upload.wikimedia.org/wikipedia/en/a/a2/Tampa_Bay_Buccaneers_logo.svg",
    "Washington Commanders": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Washington_Commanders_logo.svg"
};

const TeamLogo = ({ team }) => {
    if (!team || !teamLogos[team]) {
        return <p style={{ textAlign: "center", color: "red" }}>Logo not found</p>;
    }

    return (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h2>{team}</h2>
            <img
                src={teamLogos[team]}
                alt={`${team} logo`}
                style={{ width: '150px', height: '150px' }}
            />
        </div>
    );
};

export default TeamLogo;