import "./Table.css";
import * as img from "../img/export";
import { UserInfo } from "./UserInfo";
import Person from "./Person";

const Table = () => {
  return (
    <div className="table">
      <Person />
      {UserInfo.map((i, j) => (
        <div key={j} className={i.story} id="tb">
          <div
            id="tb-top"
            style={{
              background: `linear-gradient(to top, var(--background-full-page) 0%, var(${i.bgColor}) 50%, var(${i.bgColor}) 100%)`,
            }}
          >
            <div className="img-top">
              <img src={i.img} alt="" />
            </div>
            <div className={i.story} id="tb-bottom">
              <div className="table-bottom">
                <div className="title">
                  <span className="story">{i.story}</span>
                  <div className="img-bot">
                    <img src={img.ellipsis} alt="threePoints" />
                  </div>
                </div>
                <div className="body">
                  <h2 className="hrs">{i.hrs}</h2>
                  <p className="week">{i.week}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Table;
