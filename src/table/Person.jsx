import * as img from "../img/export";
import { useState } from "react";
import { Link } from "react-router-dom";

const Person = () => {
  let [daysOfTheWeek, setDaysOfTheWeek] = useState([
    { id: 1, name: "Daily", active: false },
    { id: 2, name: "Weekly", active: false },
    { id: 3, name: "Monthly", active: false },
  ]);
  let changeColor = (index) => {
    const temp = [...daysOfTheWeek.map((x) => ({ ...x, active: false }))];
    temp[index].active = true;
    setDaysOfTheWeek(temp);
  };
  return (
    <div className="persons">
      <div className="person">
        <div className="top-person">
          <div className="img-person">
            <img src={img.jeremy} alt="person jeremy" />
          </div>
          <div className="name-jermy">
            <span>Report for</span>
            <h2>Jermy Robson</h2>
          </div>
        </div>
        <div className="bot-person">
          {daysOfTheWeek.map((x, i) => (
            <div key={i} className="bottom-person">
              <Link
                to="/"
                className={`bot-person-days ${x.active ? "active" : ""}`}
                onClick={() => changeColor(i)}
              >
                {x.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Person;
