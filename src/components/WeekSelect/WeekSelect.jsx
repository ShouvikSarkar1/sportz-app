import React from 'react'

const WeekSelect = ({ onWeekSelect }) => {
  const weeks = [
    "Preseason Week 1",
    "Preseason Week 2",
    "Preseason Week 3",
    "Regular Season Week 1",
    "Regular Season Week 2",
    "Regular Season Week 3",
    "Regular Season Week 4",
    "Regular Season Week 5",
    "Regular Season Week 6",
    "Regular Season Week 7",
    "Regular Season Week 8",
    "Regular Season Week 9",
    "Regular Season Week 10",
    "Regular Season Week 11",
    "Regular Season Week 12",
    "Regular Season Week 13",
    "Regular Season Week 14",
    "Regular Season Week 15",
    "Regular Season Week 16",
    "Regular Season Week 17",
    "Regular Season Week 18",
    "Postseason Wild Card",
    "Postseason Divisional",
    "Postseason Conference",
    "SUPER BOWL"
  ]
  return (
    <div className='WeekSelect'>
      <select onChange={(e) => onWeekSelect(e.target.value)}>
        <option value="">--Select a Week--</option>
        {weeks.map((week) => (
            <option key={week} value={week}>{week}</option>
          ))}
      </select>
    </div>
  )
}

export default WeekSelect
