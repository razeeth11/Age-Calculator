import "./App.css";
import TextField from "@mui/material/TextField";
import BackspaceSharpIcon from "@mui/icons-material/BackspaceSharp";
import { ageCalculator } from "./calculator";
import { useState } from "react";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const res = ageCalculator(`${year}-${month}-${day}`);

  return (
    <div className="App">
      <div className="details">
        <div className="details-one">
          <label htmlFor="day">DAY</label> <br />
          <input
            onChange={(ev) => setDay(ev.target.value)}
            id="day"
            className="text"
            placeholder="DD"
            variant="outlined"
          />
        </div>
        <div className="details-two">
          <label htmlFor="month">MONTH</label> <br />
          <input
            onChange={(ev) => setMonth(ev.target.value)}
            id="month"
            className="text"
            placeholder="MM"
            variant="outlined"
          />
        </div>
        <div className="details-three">
          <label htmlFor="year">YEAR</label> <br />
          <input
            onChange={(ev) => setYear(ev.target.value)}
            id="year"
            className="text"
            placeholder="YYYY"
            variant="outlined"
          />
        </div>
      </div>
      <div className="answer">
        <button>
          <BackspaceSharpIcon />
        </button>
      </div>
      <div className="content">
        <h1>
          <span className="result">{year == "" ? "--" : res.years}</span> Years
        </h1>
        <h1>
          <span className="result">{month == "" ? "--" : res.months}</span> Months
        </h1>
        <h1>
          <span className="result">{day == "" ? "--" : res.days}</span> Days
        </h1>
      </div>
    </div>
  );
}

export default App;
